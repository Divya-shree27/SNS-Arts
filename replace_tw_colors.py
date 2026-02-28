import os

def replace_in_files(directory):
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in root or '.git' in root or '.vscode' in root:
            continue
        for file in files:
            if file.endswith('.html') or file.endswith('.tsx') or file.endswith('.js') or file.endswith('.css'):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    original_content = content
                        
                    # Also map some tailwind "red" utilities to something matching the new color since it's a lime/green-yellow color (#B0CB1F)
                    # For a quick fix without Tailwind customizing config, we'll replace the text-red, bg-red classes with the custom color via arbitrary values
                    # "red-50" ~ "#fdfdf1", "red-100" ~ "#f1f8cw" -> Instead of exact hex replacements for lighter colors, let's map text-red-600 to text-[#B0CB1F], bg-red-600/700 to bg-[#B0CB1F], text-red-700 to text-[#9BA81D]
                    content = content.replace("bg-red-500", "bg-[#B0CB1F]")
                    content = content.replace("bg-red-600", "bg-[#B0CB1F]")
                    content = content.replace("bg-red-700", "bg-[#91A61A]")
                    content = content.replace("hover:bg-red-600", "hover:bg-[#B0CB1F]")
                    content = content.replace("hover:bg-red-700", "hover:bg-[#91A61A]")
                    
                    content = content.replace("text-red-500", "text-[#B0CB1F]")
                    content = content.replace("text-red-600", "text-[#B0CB1F]")
                    content = content.replace("text-red-700", "text-[#91A61A]")
                    content = content.replace("hover:text-red-600", "hover:text-[#B0CB1F]")
                    content = content.replace("hover:text-red-700", "hover:text-[#91A61A]")
                    
                    content = content.replace("border-red-500", "border-[#B0CB1F]")
                    content = content.replace("border-red-600", "border-[#B0CB1F]")
                    content = content.replace("hover:border-red-600", "hover:border-[#B0CB1F]")
                    
                    # Also replace from-red-X / to-red-X if gradients exist
                    content = content.replace("from-red-500", "from-[#B0CB1F]")
                    content = content.replace("from-red-600", "from-[#B0CB1F]")
                    content = content.replace("to-red-500", "to-[#B0CB1F]")
                    content = content.replace("to-red-600", "to-[#B0CB1F]")
                    
                    if content != original_content:
                        with open(path, 'w', encoding='utf-8') as f:
                            f.write(content)
                        print(f"Updated {path}")
                except Exception as e:
                    print(f"Skipping {path}: {e}")

if __name__ == "__main__":
    replace_in_files('.')
    print("Done")
