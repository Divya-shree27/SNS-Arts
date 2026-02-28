import os
import glob

# Search in both .html and .tsx files
files_to_check = glob.glob('**/*.html', recursive=True) + glob.glob('**/*.tsx', recursive=True)
files_to_check = [f for f in files_to_check if 'node_modules' not in f]

for filepath in files_to_check:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    old_content = content
    
    # 1. Update the grid layout for 3 columns wrapper to wrap on mobile/tablets
    content = content.replace('<div class="grid md:grid-cols-3 gap-8">', '<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">')
    content = content.replace('<div class="grid md:grid-cols-3 gap-8 text-left">', '<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 text-left">')
    
    # 2. Update padding to be smaller on mobile and normal on large screens
    # In my previous script I used: `bg-blue-50/70 rounded-2xl p-10 hover:shadow-md transition duration-300`
    
    content = content.replace('p-10 hover:shadow-md', 'p-6 sm:p-8 lg:p-10 hover:shadow-md')
    
    if old_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

