import os
import glob
import re

files_to_check = glob.glob('**/*.html', recursive=True) + glob.glob('**/*.tsx', recursive=True)
files_to_check = [f for f in files_to_check if 'node_modules' not in f]

for filepath in files_to_check:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix the double div if it exists
    content = content.replace('<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 text-left"><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 text-left">', '<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 text-left">')
    
    # Also verify if any other grid is broken
    content = content.replace('<div class="grid md:grid-cols-3 gap-8">', '<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">')
    content = content.replace('<div class="grid md:grid-cols-3 gap-8 text-left">', '<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 text-left">')
    content = content.replace('min-h-[80px]', '') # Remove fixed min-height to allow natural flow
    content = content.replace('min-h-[48px]', '') # Remove fixed min-height to allow natural flow

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Fixed responsiveness")
