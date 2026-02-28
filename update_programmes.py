import os
import re

def update_components():
    with open('static/js/components.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Define new desktop dropdown
    new_desktop_dropdown = """
                    <!-- Programs Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-[#B0CB1F] font-medium flex items-center h-20">
                            Programs <i class="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                        <div
                            class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-56 mt-0 z-50">
                            <a href="/programs/ug.html" class="block px-4 py-2 hover:bg-[#B0CB1F] hover:text-white text-gray-700 transition-colors">UG Programmes</a>
                            <a href="/programs/pg.html" class="block px-4 py-2 hover:bg-[#B0CB1F] hover:text-white text-gray-700 transition-colors">PG Programmes</a>
                            <a href="/programs/research.html" class="block px-4 py-2 hover:bg-[#B0CB1F] hover:text-white text-gray-700 transition-colors">Research Programmes</a>
                            <a href="/programs/phd-programmes.html" class="block px-4 py-2 hover:bg-[#B0CB1F] hover:text-white text-gray-700 transition-colors">Ph.D Programmes</a>
                        </div>
                    </div>
"""
    # Replace desktop dropdown
    content = re.sub(
        r'<!-- Programs Dropdown -->\s*<div class="relative group">.*?</div>\s*</div>\s*<!-- Infrastructure Dropdown -->',
        new_desktop_dropdown + '                    <!-- Infrastructure Dropdown -->',
        content,
        flags=re.DOTALL
    )

    # Define new mobile dropdown
    new_mobile_dropdown = """
                <!-- Programs -->
                <div>
                    <button
                        class="w-full text-left text-gray-700 hover:text-[#B0CB1F] font-medium py-2 flex justify-between items-center"
                        onclick="document.getElementById('mobile-programs').classList.toggle('hidden')">
                        Programs <i class="fas fa-chevron-down"></i>
                    </button>
                    <div id="mobile-programs" class="hidden pl-4 space-y-2 mt-2">
                        <a href="/programs/ug.html" class="block text-gray-600 hover:text-[#B0CB1F] py-1">UG Programmes</a>
                        <a href="/programs/pg.html" class="block text-gray-600 hover:text-[#B0CB1F] py-1">PG Programmes</a>
                        <a href="/programs/research.html" class="block text-gray-600 hover:text-[#B0CB1F] py-1">Research Programmes</a>
                        <a href="/programs/phd-programmes.html" class="block text-gray-600 hover:text-[#B0CB1F] py-1">Ph.D Programmes</a>
                    </div>
                </div>
"""
    # Replace mobile dropdown
    content = re.sub(
        r'<!-- Programs -->\s*<div>.*?</div>\s*<!-- Infrastructure -->',
        new_mobile_dropdown + '                <!-- Infrastructure -->',
        content,
        flags=re.DOTALL
    )

    with open('static/js/components.js', 'w', encoding='utf-8') as f:
        f.write(content)


def generate_list_page(title, courses, output_file):
    cards_html = ""
    for course in courses:
        cards_html += f"""
                <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 flex flex-col h-full group">
                    <div class="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-[#B0CB1F] mb-6 group-hover:scale-110 transition-transform">
                        <i class="fas fa-graduation-cap text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 flex-grow">{course}</h3>
                    <a href="#" class="inline-flex items-center text-[#B0CB1F] font-semibold mt-4 group-hover:translate-x-1 transition-transform">
                        View Details <i class="fas fa-arrow-right ml-2 text-sm"></i>
                    </a>
                </div>
"""

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Dr. SNS Rajalakshmi College of Arts and Science</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
    <style>
        * {{ font-family: 'Inter', sans-serif; }}
        h1, h2, h3, h4 {{ font-family: 'Poppins', sans-serif; }}
    </style>
    <script src="/static/js/components.js" defer></script>
</head>
<body class="antialiased bg-gray-50 flex flex-col min-h-screen">
    <app-header></app-header>
    
    <main class="flex-grow py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
                <div class="h-1 w-24 bg-[#B0CB1F] mx-auto rounded-full"></div>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{cards_html}
            </div>
        </div>
    </main>

    <app-footer></app-footer>
</body>
</html>"""
    
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html)


ug_courses = [
    "BBA", "BBA(Computer Application)", "BCA", "B.Com.", "B.Com. (Computer Application)", 
    "B.Com. (Information Technology)", "B.Com. Digital Marketing & Data Mining", 
    "B.Com. (Professional Accounting)", "B.Sc. (Computer Science)", 
    "B.Sc. Computer Science (Artificial Intelligence and Data Science)", 
    "B.Sc. Computer Science with Cyber Security", "B.Sc. Computer Science with Data Analytics", 
    "B.Sc. Computer Science (Data Science & Visualisation)", "B.Sc. Computer Science (AI, ML & DS) *", 
    "B.Sc. Computer Science (Agentic AI) *", "B.Sc. Computer Science (Generative AI) *", 
    "B.Sc. (Costume Design and Fashion)", "B.Sc. (Information Technology)", 
    "B.Sc. Computer Science (Dev ops & Cloud)", "B.Sc. Computer Science (Full Stack Web Development)", 
    "B.Sc. Psychology"
]

pg_courses = [
    "MBA - Master of Business Administration", "MCA - Master of Computer Applications", 
    "M.Sc. Computer Science", "M.Sc. Mathematics", "M.Com.", "M.Com. (CA)", "M.A. English Literature"
]

research_courses = [
    "M.Phil. (Computer Science)", "M.Phil. (Management)", "M.Phil. (Commerce)", 
    "M.Phil. (Tamil)", "M.Phil. (English)", "M.Phil. (Library Science)"
]

phd_courses = [
    "Ph.D (Computer Science)", "Ph. D (Management)", "Ph. D (Commerce)", 
    "Ph. D (Tamil)", "Ph. D (English)", "Ph. D (Library and Information Science)"
]

def update_index_page():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
        
    academic_section = """
    <!-- Academic Programs Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                    Our <span class="text-[#B0CB1F]">Academic Programmes</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Excellence in education through Design Thinking across Undergraduate, Postgraduate, and Research streams.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- UG Programs Card -->
                <div class="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                    <div class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-[#B0CB1F] mb-6 shadow-sm">
                        <i class="fas fa-user-graduate text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">UG Programmes</h3>
                    <p class="text-gray-600 mb-6 flex-grow">
                        Explore specialized Arts, Science, Commerce, and Management streams.
                    </p>
                    <a href="/programs/ug.html" class="mt-auto pt-6 border-t border-gray-200 text-[#B0CB1F] font-bold inline-flex items-center group-hover:translate-x-1 transition-transform">
                        Explore UG <i class="fas fa-arrow-right ml-2 text-xs"></i>
                    </a>
                </div>

                <!-- PG Programs Card -->
                <div class="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                    <div class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-[#B0CB1F] mb-6 shadow-sm">
                        <i class="fas fa-book-reader text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">PG Programmes</h3>
                    <p class="text-gray-600 mb-6 flex-grow">
                        Advance your career with our Master's programs focusing on industry readiness.
                    </p>
                    <a href="/programs/pg.html" class="mt-auto pt-6 border-t border-gray-200 text-[#B0CB1F] font-bold inline-flex items-center group-hover:translate-x-1 transition-transform">
                        Explore PG <i class="fas fa-arrow-right ml-2 text-xs"></i>
                    </a>
                </div>
                
                <!-- Research Programs Card -->
                <div class="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                    <div class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-[#B0CB1F] mb-6 shadow-sm">
                        <i class="fas fa-microscope text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">Research Programmes</h3>
                    <p class="text-gray-600 mb-6 flex-grow">
                        Delve deeper into academic excellence with our intensive M.Phil research degrees.
                    </p>
                    <a href="/programs/research.html" class="mt-auto pt-6 border-t border-gray-200 text-[#B0CB1F] font-bold inline-flex items-center group-hover:translate-x-1 transition-transform">
                        Explore Research <i class="fas fa-arrow-right ml-2 text-xs"></i>
                    </a>
                </div>
                
                <!-- PhD Programs Card -->
                <div class="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                    <div class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-[#B0CB1F] mb-6 shadow-sm">
                        <i class="fas fa-award text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">Ph.D Programmes</h3>
                    <p class="text-gray-600 mb-6 flex-grow">
                        Contribute to global knowledge through our prestigious Doctoral programmes.
                    </p>
                    <a href="/programs/phd-programmes.html" class="mt-auto pt-6 border-t border-gray-200 text-[#B0CB1F] font-bold inline-flex items-center group-hover:translate-x-1 transition-transform">
                        Explore Ph.D <i class="fas fa-arrow-right ml-2 text-xs"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
"""

    content = re.sub(
        r'<!-- Academic Programs Overview -->.*?<!-- Research & Innovation Section -->',
        academic_section + '\n\n    <!-- Research & Innovation Section -->',
        content,
        flags=re.DOTALL
    )

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    update_components()
    generate_list_page("UG Programmes", ug_courses, "programs/ug.html")
    generate_list_page("PG Programmes", pg_courses, "programs/pg.html")
    generate_list_page("Research Programmes", research_courses, "programs/research.html")
    generate_list_page("Ph.D Programmes", phd_courses, "programs/phd-programmes.html")
    update_index_page()
    print("Done generating programme pages and updating headers.")
