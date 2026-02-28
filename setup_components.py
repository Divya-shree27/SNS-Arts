import os
import glob
import re

html_files = glob.glob('**/*.html', recursive=True)
html_files = [f for f in html_files if 'node_modules' not in f and 'src/' not in f]

with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

# Extract header
header_match = re.search(r'(<!-- Hanging Tag 1: NAAC A++ -->.*?</nav>)', index_content, re.DOTALL)
if header_match:
    header_content = header_match.group(1)
    header_content = header_content.replace('class="text-orange-600 font-bold font-medium"', 'class="text-gray-700 hover:text-orange-600 font-medium"')
else:
    print("Could not find header")
    exit(1)

# Extract footer
footer_match = re.search(r'(<!-- Footer -->.*?)(?:\s*</body>)', index_content, re.DOTALL)
if footer_match:
    footer_content = footer_match.group(1).strip()
    script_match = re.search(r'<script>\s*// Mobile menu toggle.*?</script>', footer_content, re.DOTALL)
    if script_match:
        footer_content = footer_content.replace(script_match.group(0), '')
else:
    print("Could not find footer")
    exit(1)

# Replace backticks in HTML strings
header_content_escaped = header_content.replace('`', '\\`')
footer_content_escaped = footer_content.replace('`', '\\`')

components_js_code = f"""
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
{header_content_escaped}
`;

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
{footer_content_escaped}
`;

class AppHeader extends HTMLElement {{
    connectedCallback() {{
        this.appendChild(headerTemplate.content.cloneNode(true));
        this.setupMobileMenu();
        this.setActiveLink();
    }}
    
    setupMobileMenu() {{
        const mobileMenuBtn = this.querySelector('#mobile-menu-btn');
        const mobileMenu = this.querySelector('#mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {{
            mobileMenuBtn.addEventListener('click', () => {{
                mobileMenu.classList.toggle('hidden');
            }});
        }}
        
        // Close mobile menu when clicking a link
        this.querySelectorAll('#mobile-menu a').forEach(link => {{
            link.addEventListener('click', () => {{
                if (mobileMenu) mobileMenu.classList.add('hidden');
            }});
        }});
    }}
    
    setActiveLink() {{
        const path = window.location.pathname;
        const links = this.querySelectorAll('.hidden.md\\\\:flex a'); // Only highlight desktop links for now to keep it clean
        let currentLink = null;
        
        links.forEach(link => {{
            const href = link.getAttribute('href');
            if (href && href !== '/' && path.includes(href)) {{
                if (!currentLink || href.length > currentLink.getAttribute('href').length) {{
                    currentLink = link;
                }}
            }}
        }});
        
        if (path === '/' || path === '/index.html') {{
            const homeLinks = Array.from(links).filter(link => link.getAttribute('href') === '/');
            homeLinks.forEach(link => {{
                link.classList.add('text-orange-600', 'font-bold');
                link.classList.remove('text-gray-700');
            }});
        }} else if (currentLink) {{
            currentLink.classList.add('text-orange-600', 'font-bold');
            currentLink.classList.remove('text-gray-700');
            
            // Highlight stakeholder dropdown button
            const dropdown = currentLink.closest('.relative.group');
            if (dropdown) {{
                const btn = dropdown.querySelector('button');
                if (btn) {{
                    btn.classList.add('text-orange-600', 'font-bold');
                    btn.classList.remove('text-gray-700');
                }}
            }}
        }}
    }}
}}
customElements.define('app-header', AppHeader);

class AppFooter extends HTMLElement {{
    connectedCallback() {{
        this.appendChild(footerTemplate.content.cloneNode(true));
    }}
}}
customElements.define('app-footer', AppFooter);
"""

os.makedirs('static/js', exist_ok=True)
with open('static/js/components.js', 'w', encoding='utf-8') as f:
    f.write(components_js_code)
print("Created static/js/components.js")

for filepath in html_files:
    if filepath == 'bitrix.html':
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if '<app-header>' in content:
        continue

    # Add the script to the head component
    if 'static/js/components.js' not in content:
        content = re.sub(r'(</head>)', r'    <script src="/static/js/components.js" defer></script>\n\1', content)

    # Note: Handle specific hanging tag 1 case
    content = re.sub(r'<!-- Hanging Tag 1: NAAC A++ -->.*?</nav>', '<app-header></app-header>', content, flags=re.DOTALL)
    
    content = re.sub(r'<!-- Footer -->.*?(?=</body>)', '<app-footer></app-footer>\n    ', content, flags=re.DOTALL)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Updated {filepath}")

