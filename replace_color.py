import os

def replace_in_files(directory, old_str, new_str):
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in root or '.git' in root or '.vscode' in root:
            continue
        for file in files:
            if file.endswith('.html') or file.endswith('.tsx') or file.endswith('.js') or file.endswith('.css'):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    if old_str in content:
                        content = content.replace(old_str, new_str)
                        with open(path, 'w', encoding='utf-8') as f:
                            f.write(content)
                        print(f"Updated {path}")
                except Exception as e:
                    print(f"Skipping {path}: {e}")

if __name__ == "__main__":
    replace_in_files('.', '#E31E24', '#B0CB1F')
    replace_in_files('.', 'rgb(227, 30, 36)', 'rgb(176, 203, 31)')
    replace_in_files('.', 'rgb(227,30,36)', 'rgb(176,203,31)')
    print("Done")
