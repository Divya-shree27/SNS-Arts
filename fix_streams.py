import re

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_science = """                    <h3 class="text-2xl font-bold mb-4">Science Stream</h3>
                    <p class="text-gray-700 mb-4 font-semibold">Physics, Chemistry, Mathematics / Biology with Computer Science</p>
                    <ul class="space-y-2 text-sm text-gray-600">
                        <li>• Engineering & technology preparation</li>
                        <li>• Medical & allied health pathways</li>
                        <li>• Life sciences & research opportunities</li>
                        <li>• Computer science-enabled STEM careers</li>
                    </ul>"""

    new_commerce = """                    <h3 class="text-2xl font-bold mb-4">Commerce Stream</h3>
                    <p class="text-gray-700 mb-4 font-semibold">Accountancy, Business Studies, Economics with Mathematics</p>
                    <ul class="space-y-2 text-sm text-gray-600">
                        <li>• CA / CS / CMA professional preparation</li>
                        <li>• Business & management foundations</li>
                        <li>• Finance, banking & economics pathways</li>
                        <li>• Analytics, entrepreneurship & startups</li>
                    </ul>"""

    new_humanities = """                    <h3 class="text-2xl font-bold mb-4">Humanities Stream</h3>
                    <p class="text-gray-700 mb-4 font-semibold">History, Political Science, Economics, Psychology</p>
                    <ul class="space-y-2 text-sm text-gray-600">
                        <li>• Civil services & government exam preparation</li>
                        <li>• Law, public policy & governance pathways</li>
                        <li>• Psychology & mental health foundations</li>
                        <li>• Social sciences research & critical thinking</li>
                    </ul>"""

    # Replace Science
    content = re.sub(r'<h3 class="text-2xl font-bold mb-4">Science Stream</h3>.*?</ul>', new_science, content, flags=re.DOTALL)
    # Replace Commerce
    content = re.sub(r'<h3 class="text-2xl font-bold mb-4">Commerce Stream</h3>.*?</ul>', new_commerce, content, flags=re.DOTALL)
    # Replace Humanities
    content = re.sub(r'<h3 class="text-2xl font-bold mb-4">Humanities Stream</h3>.*?</ul>', new_humanities, content, flags=re.DOTALL)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

update_file('academics/secondary/index.html')
update_file('academics/senior-secondary/index.html')
update_file('src/index.tsx')
