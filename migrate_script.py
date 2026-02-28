import re
import os

def migrate_index():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Title and meta
    content = content.replace(
        "Home | SNS College of Technology - Autonomous | NAAC A++ | Coimbatore",
        "Home | Dr. SNS Rajalakshmi College of Arts and Science - Autonomous"
    )
    content = content.replace(
        "SNS College of Technology - India's first",
        "Dr. SNS Rajalakshmi College of Arts and Science - India's first"
    )

    # Hero section
    content = content.replace(
        "alt=\"SNS College of Technology Campus\"",
        "alt=\"Dr. SNS Rajalakshmi College of Arts and Science Campus\""
    )
    content = content.replace(
        "Autonomous | NAAC A++ | NBA Accreditation. Transform your potential into innovation at Coimbatore's premier technology institute.",
        "Autonomous | NAAC A+ | Transform your potential into innovation at Coimbatore's premier arts and science institute."
    )
    
    # Why section
    content = content.replace(
        "Why SNS College of Technology",
        "Why Dr. SNS Rajalakshmi College of Arts and Science"
    )
    
    # Trust Bar / Stats
    # Keep stats but change company partners if we want, but the prompt says migrate contents perfectly like courses. Let's just change college name.
    content = content.replace(
        "SNS College of Technology",
        "Dr. SNS Rajalakshmi College of Arts and Science"
    )

    # Academic Programs Overview
    content = content.replace(
        "Explore 17 specialized Engineering and Technology streams",
        "Explore specialized Arts, Science, Commerce, and Management streams"
    )
    content = content.replace(
        "<span class=\"bg-white px-3 py-1 rounded-full shadow-sm mr-3\">B.E.</span>",
        "<span class=\"bg-white px-3 py-1 rounded-full shadow-sm mr-3\">B.Sc.</span>"
    )
    content = content.replace(
        "<span class=\"bg-white px-3 py-1 rounded-full shadow-sm mr-3\">B.Tech.</span>",
        "<span class=\"bg-white px-3 py-1 rounded-full shadow-sm mr-3\">B.Com.</span>"
    )
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
        
def migrate_components():
    with open('static/js/components.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = content.replace("SNS College of Technology", "Dr. SNS Rajalakshmi College of Arts and Science")
    content = content.replace("Autonomous | NAAC A++ | NBA Accreditation", "Autonomous | NAAC A+")
    content = content.replace("Autonomous | NAAC A++ | NBA", "Autonomous | NAAC A+")
    
    # Replace UG Programs
    ug_courses_html = """
                                            <div class="grid gap-1">
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">BBA</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">BBA(Computer Application)</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">BCA</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">B.Com.</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">B.Com. (Computer Application)</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">B.Com. (IT)</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">B.Com. Digital Marketing & Data Mining</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">B.Com. (Professional Accounting)</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">B.Sc. (Computer Science)</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">B.Sc. CS (AI and Data Science)</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">B.Sc. CS with Cyber Security</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">B.Sc. CS with Data Analytics</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">B.Sc. CS (Data Science & Visualisation)</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">B.Sc. CS (Agentic AI)</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">B.Sc. CS (Generative AI)</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">B.Sc. (Costume Design and Fashion)</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">B.Sc. (IT)</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">B.Sc. CS (Full Stack Web Development)</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">B.Sc. Psychology</a>
                                            </div>"""
                                            
    # Find and replace UG list in components.js
    content = re.sub(r'<div class="grid gap-1">.*?</div>', ug_courses_html, content, count=1, flags=re.DOTALL)
    
    # Replace PG Programs (the second <div class="grid gap-1">)
    pg_courses_html = """
                                            <div class="grid gap-1">
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">MBA - Master of Business Administration</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">MCA - Master of Computer Applications</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">M.Sc. Computer Science</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">M.Sc. Mathematics</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">M.Com.</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">M.Com. (CA)</a>
                                                <a href="#" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">M.A. English Literature</a>
                                            </div>"""
    content = re.sub(r'<div class="grid gap-1">.*?</div>', pg_courses_html, content, count=1, flags=re.DOTALL)
    
    
    # For Mobile Menu UG:
    mobile_ug_html = """
                        <div id="mobile-ug" class="hidden pl-4 space-y-1 mb-4">
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">BBA</a>
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">BBA(CA)</a>
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">BCA</a>
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">B.Com.</a>
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">B.Com. (CA)</a>
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">B.Com. (IT)</a>
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">B.Com. Digital Mktg</a>
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">B.Sc. CS</a>
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">B.Sc. CS (AIDS)</a>
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">B.Sc. Cyber Sec</a>
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">B.Sc. Costume Design</a>
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">B.Sc. Psychology</a>
                        </div>"""
    content = re.sub(r'<div id="mobile-ug".*?</div>', mobile_ug_html, content, flags=re.DOTALL)
    
    mobile_pg_html = """
                        <div id="mobile-pg" class="hidden pl-4 space-y-1">
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">MBA</a>
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">MCA</a>
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">M.Sc. CS</a>
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">M.Sc. Maths</a>
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">M.Com.</a>
                            <a href="#" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">M.A. English</a>
                        </div>"""
    content = re.sub(r'<div id="mobile-pg".*?</div>', mobile_pg_html, content, flags=re.DOTALL)
    
    # footer top programs
    footer_pgs_html = """
                    <ul class="space-y-2 text-sm">
                        <li><a href="#" class="hover:text-white transition">B.Sc. CS (AI & DS)</a></li>
                        <li><a href="#" class="hover:text-white transition">B.Com. (PA)</a></li>
                        <li><a href="#" class="hover:text-white transition">MBA</a></li>
                        <li><a href="#" class="hover:text-white transition">MCA</a></li>
                        <li><a href="#" class="hover:text-white transition">B.Sc. Psychology</a></li>
                        <li><a href="/mandatory-disclosure" class="hover:text-white transition">Mandatory Disclosure</a></li>
                    </ul>"""
                    
    content = re.sub(r'<ul class="space-y-2 text-sm">(.*?)</ul>', lambda m: footer_pgs_html if 'B.Tech' in m.group(1) else m.group(0), content, flags=re.DOTALL)
    
    with open('static/js/components.js', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    migrate_index()
    migrate_components()
