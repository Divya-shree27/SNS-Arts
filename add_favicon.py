import os
import re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
LOGO_PATH = os.path.join(BASE_DIR, "static", "images", "Logo.png")

HTML_FILES = []
for root, dirs, files in os.walk(BASE_DIR):
    # Skip node_modules
    dirs[:] = [d for d in dirs if d not in ("node_modules", ".git")]
    for f in files:
        if f.endswith(".html"):
            HTML_FILES.append(os.path.join(root, f))

for html_file in HTML_FILES:
    # Calculate relative path from html file to Logo.png
    html_dir = os.path.dirname(html_file)
    rel_path = os.path.relpath(LOGO_PATH, html_dir)
    # Convert Windows backslashes to forward slashes (for web)
    rel_path = rel_path.replace("\\", "/")

    favicon_tag = f'    <link rel="icon" type="image/png" href="{rel_path}">'

    with open(html_file, "r", encoding="utf-8") as fh:
        content = fh.read()

    # Skip if favicon already added
    if 'rel="icon"' in content or "rel='icon'" in content:
        print(f"[SKIP] Already has favicon: {html_file}")
        continue

    # Insert after <meta charset="UTF-8"> line
    new_content = re.sub(
        r'(<meta\s+charset=["\']UTF-8["\'][^>]*>)',
        r'\1\n' + favicon_tag,
        content,
        count=1
    )

    if new_content != content:
        with open(html_file, "w", encoding="utf-8") as fh:
            fh.write(new_content)
        print(f"[DONE] Added favicon to: {html_file}")
    else:
        print(f"[WARN] Could not find insertion point: {html_file}")

print("\nAll done!")
