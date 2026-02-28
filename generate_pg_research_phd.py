import os

def make_course_page(title, degree, duration, eligibility, overview, subjects, careers, back_link, back_label):
    subjects_html = ""
    for icon, subj in subjects:
        subjects_html += f"""
                        <div class="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <i class="fas {icon} text-[#B0CB1F] mr-3"></i>
                            <span>{subj}</span>
                        </div>"""

    careers_html = ""
    for c in careers:
        careers_html += f"""
                            <li class="flex items-center text-gray-700">
                                <i class="fas fa-briefcase text-[#B0CB1F] mr-3 text-sm"></i> {c}
                            </li>"""

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="/static/images/Favicon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Dr. SNS Rajalakshmi College of Arts and Science</title>
    <meta name="description" content="Explore the {title} ({degree}) programme at Dr. SNS Rajalakshmi College of Arts and Science, Coimbatore.">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
    <style>
        * {{ font-family: 'Inter', sans-serif; }}
        h1, h2, h3, h4, h5, h6 {{ font-family: 'Poppins', sans-serif; }}
        html {{ scroll-behavior: smooth; }}
        .whatsapp-float {{
            position: fixed; width: 60px; height: 60px; bottom: 40px; right: 40px;
            background-color: #25d366; color: #FFF; border-radius: 50%; text-align: center;
            font-size: 32px; box-shadow: 0 4px 12px rgba(0,0,0,.15); z-index: 1000;
            display: flex; align-items: center; justify-content: center; text-decoration: none;
        }}
        .instagram-float {{
            position: fixed; width: 60px; height: 60px; bottom: 110px; right: 40px;
            background: linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
            color: #FFF; border-radius: 50%; text-align: center; font-size: 32px;
            box-shadow: 0 4px 12px rgba(0,0,0,.15); z-index: 1000;
            display: flex; align-items: center; justify-content: center; text-decoration: none;
        }}
    </style>
    <script src="/static/js/components.js" defer></script>
</head>
<body class="antialiased bg-gray-50">
    <app-header></app-header>

    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[350px] flex items-center justify-center text-white overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="/static/images/hero3.png" alt="{title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="mb-6">
                <div class="flex items-center space-x-2 text-sm text-white/80">
                    <a href="/" class="hover:text-white transition">Home</a>
                    <i class="fas fa-chevron-right text-xs"></i>
                    <a href="{back_link}" class="hover:text-white transition">&larr; Back to {back_label}</a>
                </div>
            </nav>
            <div class="inline-block bg-[#B0CB1F]/20 border border-[#B0CB1F]/40 rounded-full px-4 py-1 text-sm text-[#B0CB1F] font-semibold mb-4 uppercase tracking-widest">{back_label}</div>
            <h1 class="text-4xl lg:text-6xl font-extrabold mb-3 leading-tight">{title}</h1>
            <p class="text-xl lg:text-2xl font-bold text-[#B0CB1F]">{degree}</p>
        </div>
    </section>

    <!-- Quick Stats Bar -->
    <div class="bg-white border-b shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                    <i class="fas fa-clock text-[#B0CB1F] text-2xl mb-2"></i>
                    <p class="text-xs text-gray-500 uppercase tracking-wide font-medium">Duration</p>
                    <p class="font-bold text-gray-900">{duration}</p>
                </div>
                <div>
                    <i class="fas fa-graduation-cap text-[#B0CB1F] text-2xl mb-2"></i>
                    <p class="text-xs text-gray-500 uppercase tracking-wide font-medium">Eligibility</p>
                    <p class="font-bold text-gray-900">{eligibility}</p>
                </div>
                <div>
                    <i class="fas fa-map-marker-alt text-[#B0CB1F] text-2xl mb-2"></i>
                    <p class="text-xs text-gray-500 uppercase tracking-wide font-medium">Campus</p>
                    <p class="font-bold text-gray-900">Coimbatore</p>
                </div>
                <div>
                    <i class="fas fa-briefcase text-[#B0CB1F] text-2xl mb-2"></i>
                    <p class="text-xs text-gray-500 uppercase tracking-wide font-medium">Placement</p>
                    <p class="font-bold text-gray-900">100% Assistance</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Program Details -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-3 gap-12">
                <div class="lg:col-span-2">
                    <h2 class="text-3xl font-bold mb-6 flex items-center">
                        <i class="fas fa-graduation-cap text-[#B0CB1F] mr-4"></i>
                        Program Overview
                    </h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-10">{overview}</p>

                    <h3 class="text-2xl font-bold mb-6 text-gray-900">Key Subjects &amp; Specializations</h3>
                    <div class="grid md:grid-cols-2 gap-3 mb-12">
{subjects_html}
                    </div>

                    <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <h3 class="text-xl font-bold mb-3 text-gray-900">Design Thinking Integration</h3>
                        <p class="text-gray-600 leading-relaxed">
                            At Dr. SNS Rajalakshmi College of Arts and Science, our Design Thinking framework is woven into every programme. Students are encouraged to empathize, ideate, and prototype real-world solutions — bridging academic knowledge with industry needs.
                        </p>
                    </div>
                </div>

                <div class="space-y-8">
                    <div class="bg-gray-900 text-white rounded-2xl p-8 shadow-xl">
                        <h3 class="text-xl font-bold mb-6 border-b border-white/20 pb-4">Admissions Open</h3>
                        <div class="space-y-5 mb-8">
                            <div class="flex items-center">
                                <i class="fas fa-clock text-[#B0CB1F] text-xl mr-4"></i>
                                <div>
                                    <p class="text-gray-400 text-sm">Academic Year</p>
                                    <p class="font-bold">2026–27</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-chair text-[#B0CB1F] text-xl mr-4"></i>
                                <div>
                                    <p class="text-gray-400 text-sm">Seats</p>
                                    <p class="font-bold">Limited Seats Available</p>
                                </div>
                            </div>
                        </div>
                        <a href="/admissions" class="block w-full bg-[#B0CB1F] hover:bg-[#91A61A] text-white text-center py-4 rounded-xl font-bold transition shadow-lg">Apply for Admission</a>
                    </div>

                    <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <h3 class="text-xl font-bold mb-4 text-gray-900">Career Opportunities</h3>
                        <ul class="space-y-3">
{careers_html}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 bg-gray-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Shape Your Career?</h2>
            <p class="text-xl mb-8 text-gray-400">Join Dr. SNS Rajalakshmi College of Arts and Science — Where Wisdom Meets Talent.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-[#B0CB1F] hover:bg-[#91A61A] text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl">Apply Now</a>
                <a href="/contact" class="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition">Contact Us</a>
            </div>
        </div>
    </section>

    <app-footer></app-footer>
</body>
</html>"""


# ---- PG Courses ----
pg_courses = [
    ("mba", "Master of Business Administration", "MBA", "2 Years (4 Semesters)", "Any Degree",
     "The MBA programme at Dr. SNS Rajalakshmi College of Arts and Science is designed to develop well-rounded business leaders. Students gain expertise in strategic management, finance, marketing, and operations through case studies, live projects, and industry interactions.",
     [("fa-chart-line","Strategic Management"),("fa-coins","Financial Management"),("fa-bullhorn","Marketing Management"),("fa-users","Human Resource Management"),("fa-handshake","Business Communication"),("fa-lightbulb","Entrepreneurship")],
     ["Business Manager","Marketing Executive","HR Manager","Financial Analyst","Entrepreneur","Operations Manager"]),

    ("mca", "Master of Computer Applications", "MCA", "2 Years (4 Semesters)", "B.Sc. CS / BCA / B.Sc. IT",
     "The MCA programme equips graduates with advanced knowledge in software engineering, cloud computing, AI, and database management. Students build industry-ready applications and develop strong problem-solving skills.",
     [("fa-code","Advanced Programming"),("fa-database","Database Management"),("fa-cloud","Cloud Computing"),("fa-robot","Artificial Intelligence"),("fa-network-wired","Software Engineering"),("fa-shield-halved","Cyber Security")],
     ["Software Engineer","Full Stack Developer","AI/ML Engineer","Database Administrator","IT Project Manager","Cloud Architect"]),

    ("msc-cs", "Master of Science (Computer Science)", "M.Sc. Computer Science", "2 Years (4 Semesters)", "B.Sc. CS / B.Sc. IT / BCA",
     "The M.Sc. Computer Science programme provides in-depth training in algorithms, machine learning, advanced databases, and computing theory. Graduates are prepared for research roles and senior IT positions.",
     [("fa-code","Algorithm Design"),("fa-brain","Machine Learning"),("fa-database","Advanced DBMS"),("fa-network-wired","Computer Networks"),("fa-chart-line","Data Science"),("fa-search","Research Methodology")],
     ["Research Scientist","Software Architect","Data Scientist","AI Engineer","University Lecturer","Systems Developer"]),

    ("msc-maths", "Master of Science (Mathematics)", "M.Sc. Mathematics", "2 Years (4 Semesters)", "B.Sc. Mathematics / Related",
     "The M.Sc. Mathematics programme covers advanced algebra, real analysis, topology, numerical methods, and operations research, preparing students for academic and applied mathematical careers.",
     [("fa-square-root-variable","Advanced Algebra"),("fa-chart-line","Real Analysis"),("fa-circle","Topology"),("fa-calculator","Numerical Methods"),("fa-diagram-project","Operations Research"),("fa-search","Research Methodology")],
     ["Mathematical Analyst","Actuary","Data Analyst","Statistician","University Lecturer","Research Scholar"]),

    ("mcom", "Master of Commerce", "M.Com.", "2 Years (4 Semesters)", "B.Com. / Any Commerce Degree",
     "The M.Com. programme provides an advanced understanding of commerce, accounting, finance, and business law. It prepares students for higher academic pursuits and senior commercial professions.",
     [("fa-coins","Advanced Accounting"),("fa-chart-pie","Financial Management"),("fa-file-invoice","Taxation"),("fa-scale-balanced","Business Law"),("fa-chart-line","Investment Analysis"),("fa-search","Research Methods")],
     ["Senior Accountant","Financial Analyst","Tax Consultant","Auditor","University Lecturer","Finance Manager"]),

    ("mcom-ca", "Master of Commerce (CA)", "M.Com. (CA)", "2 Years (4 Semesters)", "B.Com. / B.Com. (CA)",
     "M.Com. (CA) blends advanced commerce education with computer applications, covering accounting software, business IT tools, and advanced commerce subjects for IT-enabled commerce roles.",
     [("fa-coins","Advanced Commerce"),("fa-laptop","Computer Applications"),("fa-database","Business Database"),("fa-chart-bar","E-Commerce"),("fa-file-invoice","Advanced Taxation"),("fa-code","Software Tools")],
     ["IT-Commerce Manager","ERP Specialist","Senior Accounts Executive","MIS Executive","Financial Systems Analyst","Accounts Manager"]),

    ("ma-english", "Master of Arts (English Literature)", "M.A. English Literature", "2 Years (4 Semesters)", "B.A. English / Any Degree",
     "The M.A. English Literature programme explores canonical and contemporary literary traditions, critical theory, linguistics, and creative writing, cultivating strong analytical and communication skills.",
     [("fa-book","Literary Theory"),("fa-pen","Creative Writing"),("fa-language","Linguistics"),("fa-globe","Comparative Literature"),("fa-comments","Communication Skills"),("fa-search","Research Methods")],
     ["Content Writer","Editor","University Lecturer","Journalist","Language Trainer","PR Professional"]),
]

# ---- Research (M.Phil.) Courses ----
research_courses = [
    ("mphil-cs", "M.Phil. (Computer Science)", "M.Phil. (CS)", "1 Year", "M.Sc. CS / MCA",
     "The M.Phil. Computer Science programme is a rigorous research degree focused on developing original contributions to computer science through advanced coursework and supervised research.",
     [("fa-brain","Research Methodology"),("fa-code","Advanced Algorithms"),("fa-database","Advanced DBMS"),("fa-robot","AI Research"),("fa-search","Thesis Work"),("fa-chart-line","Computational Research")],
     ["Research Scholar","University Lecturer","PhD Researcher","IT Research Analyst","Academic Writer"]),

    ("mphil-management", "M.Phil. (Management)", "M.Phil. (Management)", "1 Year", "MBA / Any PG in Management",
     "This M.Phil. programme focuses on advanced business research, covering organizational behavior, strategic management, and quantitative research methodologies.",
     [("fa-chart-line","Advanced Management"),("fa-users","Organizational Behaviour"),("fa-chart-pie","Research Methodology"),("fa-search","Thesis Work"),("fa-lightbulb","Strategic Studies"),("fa-handshake","Business Research")],
     ["Management Researcher","Academic Faculty","PhD Scholar","Business Strategist","Research Analyst"]),

    ("mphil-commerce", "M.Phil. (Commerce)", "M.Phil. (Commerce)", "1 Year", "M.Com. / Any Commerce PG",
     "The M.Phil. Commerce programme enables in-depth scholarly research in commerce, finance, taxation, and related areas through advanced coursework and original research.",
     [("fa-coins","Advanced Commerce"),("fa-chart-line","Financial Research"),("fa-file-invoice","Taxation Studies"),("fa-search","Research Methodology"),("fa-chart-pie","Thesis Work"),("fa-scale-balanced","Business Law Research")],
     ["Commerce Researcher","University Lecturer","Tax Research Specialist","Financial Researcher","PhD Scholar"]),

    ("mphil-tamil", "M.Phil. (Tamil)", "M.Phil. (Tamil)", "1 Year", "M.A. Tamil / Related",
     "The M.Phil. Tamil programme fosters advanced study and original research in Tamil language, literature, and culture, preparing scholars for academic and creative roles.",
     [("fa-language","Tamil Literature"),("fa-book","Classical Tamil"),("fa-pen","Research Writing"),("fa-search","Research Methodology"),("fa-scroll","History of Tamil"),("fa-star","Thesis Work")],
     ["Tamil Scholar","University Lecturer","Content Creator","Literary Researcher","Language Trainer"]),

    ("mphil-english", "M.Phil. (English)", "M.Phil. (English)", "1 Year", "M.A. English / Related",
     "The M.Phil. English programme provides advanced research training in English literature, linguistics, and critical theory, leading to a supervised thesis.",
     [("fa-book","English Literature"),("fa-language","Linguistics"),("fa-pen","Academic Writing"),("fa-search","Research Methodology"),("fa-globe","Comparative Literature"),("fa-chart-line","Thesis Work")],
     ["English Language Researcher","University Lecturer","Content Specialist","PhD Scholar","Literary Critic"]),

    ("mphil-library-science", "M.Phil. (Library Science)", "M.Phil. (Library Science)", "1 Year", "M.Lib.Sc. / Related",
     "The M.Phil. Library Science programme equips candidates with advanced knowledge of information management, library systems, digital archives, and research skills.",
     [("fa-book","Library Management"),("fa-database","Digital Archiving"),("fa-search","Research Methodology"),("fa-globe","Information Systems"),("fa-file","Cataloguing"),("fa-chart-line","Thesis Work")],
     ["Senior Librarian","Research Librarian","Information Manager","Digital Archivist","University Lecturer"]),
]

# ---- Ph.D Courses ----
phd_courses = [
    ("phd-cs", "Ph.D (Computer Science)", "Ph.D (Computer Science)", "3–5 Years", "M.Sc. CS / MCA / M.Phil. CS",
     "The Ph.D. programme in Computer Science supports advanced and original research in the fields of AI, machine learning, cybersecurity, and advanced computing, guided by experienced research supervisors.",
     [("fa-brain","AI & ML Research"),("fa-database","Advanced Computing"),("fa-shield-halved","Cybersecurity Research"),("fa-search","Thesis Writing"),("fa-network-wired","Distributed Systems"),("fa-chart-line","Research Publications")],
     ["University Professor","AI Researcher","Senior Research Scientist","CTO","Research Fellow"]),

    ("phd-management", "Ph.D (Management)", "Ph.D (Management)", "3–5 Years", "MBA / M.Phil. Management",
     "The Doctoral programme in Management focuses on original academic research in organizational theory, strategic management, human resources, and marketing, contributing to research literature.",
     [("fa-chart-line","Organizational Research"),("fa-users","HRM Studies"),("fa-bullhorn","Marketing Research"),("fa-search","Thesis & Publications"),("fa-lightbulb","Strategic Analysis"),("fa-handshake","Research Methodology")],
     ["Business School Professor","Senior Research Analyst","Management Consultant","Policy Researcher","PhD Advisor"]),

    ("phd-commerce", "Ph.D (Commerce)", "Ph.D (Commerce)", "3–5 Years", "M.Com. / M.Phil. Commerce",
     "The Ph.D. Commerce programme provides scholars with the opportunity to conduct original research in commerce, accounting, finance, and business economics at the highest academic level.",
     [("fa-coins","Advanced Accounting Research"),("fa-chart-pie","Finance Research"),("fa-file-invoice","Tax Research"),("fa-search","Thesis Work"),("fa-scale-balanced","Business Law"),("fa-chart-line","Publications")],
     ["Commerce Professor","Research Economist","Financial Research Scholar","PhD Research Guide","Senior Auditor"]),

    ("phd-tamil", "Ph.D (Tamil)", "Ph.D (Tamil)", "3–5 Years", "M.A. Tamil / M.Phil. Tamil",
     "The Ph.D. Tamil programme supports original doctoral research in Tamil language, classical literature, and modern Tamil studies, contributing to the preservation and development of Tamil scholarship.",
     [("fa-language","Classical Tamil Research"),("fa-book","Modern Tamil Literature"),("fa-pen","Research & Writing"),("fa-search","Thesis Work"),("fa-scroll","Tamil Cultural Studies"),("fa-star","Publications")],
     ["Tamil University Professor","Literary Scholar","Tamil Researcher","Cultural Historian","Research Fellow"]),

    ("phd-english", "Ph.D (English)", "Ph.D (English)", "3–5 Years", "M.A. English / M.Phil. English",
     "The Ph.D. English programme enables doctoral candidates to engage in groundbreaking research in English literature, comparative literature, and linguistic studies leading to significant academic outputs.",
     [("fa-book","English Literary Research"),("fa-language","Linguistics Research"),("fa-pen","Academic Writing"),("fa-search","Thesis Work"),("fa-globe","Comparative Studies"),("fa-chart-line","Research Publications")],
     ["English Professor","Literary Researcher","Curriculum Developer","PhD Research Guide","Language Policy Expert"]),

    ("phd-library-science", "Ph.D (Library and Information Science)", "Ph.D (Library Science)", "3–5 Years", "M.Lib.Sc. / M.Phil. Library Science",
     "The Ph.D. in Library and Information Science focuses on research in digital libraries, knowledge management, information systems, and archival science at the highest scholarly level.",
     [("fa-book","Information Science Research"),("fa-database","Digital Library Studies"),("fa-search","Research Methodology"),("fa-globe","Knowledge Management"),("fa-file","Archival Research"),("fa-chart-line","Thesis & Publications")],
     ["Chief Librarian","Digital Library Consultant","Information Researcher","University Faculty","Research Archivist"]),
]

os.makedirs("programs/pg", exist_ok=True)
os.makedirs("programs/research", exist_ok=True)
os.makedirs("programs/phd", exist_ok=True)

# Generate PG pages
for entry in pg_courses:
    slug, title, degree, duration, elig, overview, subjects, careers = entry
    html = make_course_page(title, degree, duration, elig, overview, subjects, careers,
                            "/programs/pg.html", "PG Programmes")
    fname = f"programs/pg/{slug}.html"
    with open(fname, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Created {fname}")

# Generate Research pages
for entry in research_courses:
    slug, title, degree, duration, elig, overview, subjects, careers = entry
    html = make_course_page(title, degree, duration, elig, overview, subjects, careers,
                            "/programs/research.html", "Research Programmes")
    fname = f"programs/research/{slug}.html"
    with open(fname, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Created {fname}")

# Generate PhD pages
for entry in phd_courses:
    slug, title, degree, duration, elig, overview, subjects, careers = entry
    html = make_course_page(title, degree, duration, elig, overview, subjects, careers,
                            "/programs/phd-programmes.html", "Ph.D Programmes")
    fname = f"programs/phd/{slug}.html"
    with open(fname, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Created {fname}")

# ---- Update pg.html links ----
pg_link_map = [
    ("/programs/pg/mba.html", "MBA - Master of Business Administration"),
    ("/programs/pg/mca.html", "MCA - Master of Computer Applications"),
    ("/programs/pg/msc-cs.html", "M.Sc. Computer Science"),
    ("/programs/pg/msc-maths.html", "M.Sc. Mathematics"),
    ("/programs/pg/mcom.html", "M.Com."),
    ("/programs/pg/mcom-ca.html", "M.Com. (CA)"),
    ("/programs/pg/ma-english.html", "M.A. English Literature"),
]

with open("programs/pg.html", 'r', encoding='utf-8') as f:
    pg_content = f.read()
for link, _ in pg_link_map:
    pg_content = pg_content.replace('href="#"', f'href="{link}"', 1)
with open("programs/pg.html", 'w', encoding='utf-8') as f:
    f.write(pg_content)
print("Updated programs/pg.html")

# ---- Update research.html links ----
research_link_map = [
    "/programs/research/mphil-cs.html",
    "/programs/research/mphil-management.html",
    "/programs/research/mphil-commerce.html",
    "/programs/research/mphil-tamil.html",
    "/programs/research/mphil-english.html",
    "/programs/research/mphil-library-science.html",
]
with open("programs/research.html", 'r', encoding='utf-8') as f:
    res_content = f.read()
for link in research_link_map:
    res_content = res_content.replace('href="#"', f'href="{link}"', 1)
with open("programs/research.html", 'w', encoding='utf-8') as f:
    f.write(res_content)
print("Updated programs/research.html")

# ---- Update phd-programmes.html links ----
phd_link_map = [
    "/programs/phd/phd-cs.html",
    "/programs/phd/phd-management.html",
    "/programs/phd/phd-commerce.html",
    "/programs/phd/phd-tamil.html",
    "/programs/phd/phd-english.html",
    "/programs/phd/phd-library-science.html",
]
with open("programs/phd-programmes.html", 'r', encoding='utf-8') as f:
    phd_content = f.read()
for link in phd_link_map:
    phd_content = phd_content.replace('href="#"', f'href="{link}"', 1)
with open("programs/phd-programmes.html", 'w', encoding='utf-8') as f:
    f.write(phd_content)
print("Updated programs/phd-programmes.html")

print("\nAll done!")
