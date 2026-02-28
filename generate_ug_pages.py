import os

def make_course_page(slug, title, degree, duration, eligibility, overview, subjects, careers, outfile):
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
            transition: all .3s cubic-bezier(.4,0,.2,1);
        }}
        .instagram-float {{
            position: fixed; width: 60px; height: 60px; bottom: 110px; right: 40px;
            background: linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
            color: #FFF; border-radius: 50%; text-align: center; font-size: 32px;
            box-shadow: 0 4px 12px rgba(0,0,0,.15); z-index: 1000;
            display: flex; align-items: center; justify-content: center; text-decoration: none;
            transition: all .3s cubic-bezier(.4,0,.2,1);
        }}
    </style>
    <script src="/static/js/components.js" defer></script>
</head>
<body class="antialiased bg-gray-50">
    <app-header></app-header>

    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[380px] flex items-center justify-center text-white overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="/static/images/hero3.png" alt="{title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="mb-6">
                <div class="flex items-center space-x-2 text-sm text-white/80">
                    <a href="/" class="hover:text-white transition">Home</a>
                    <i class="fas fa-chevron-right text-xs"></i>
                    <a href="/programs/ug.html" class="hover:text-white transition">&larr; Back to UG Programmes</a>
                </div>
            </nav>
            <div class="inline-block bg-[#B0CB1F]/20 border border-[#B0CB1F]/40 rounded-full px-4 py-1 text-sm text-[#B0CB1F] font-semibold mb-4 uppercase tracking-widest">Undergraduate Programme</div>
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
                <!-- Main Content -->
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

                <!-- Sidebar -->
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

    <!-- CTA -->
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
</html>
"""

courses = [
    {
        "slug": "bba", "title": "Bachelor of Business Administration", "degree": "BBA",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Any Stream)",
        "overview": "The BBA programme at Dr. SNS Rajalakshmi College of Arts and Science is meticulously designed to provide students with a strong foundation in business management, leadership, and entrepreneurship. Students gain hands-on experience through live projects, industry interactions, and design thinking workshops.",
        "subjects": [("fa-chart-line","Principles of Management"),("fa-coins","Financial Accounting"),("fa-bullhorn","Marketing Management"),("fa-users","Human Resource Management"),("fa-handshake","Business Communication"),("fa-lightbulb","Entrepreneurship Development")],
        "careers": ["Business Manager","Marketing Executive","HR Executive","Entrepreneur","Business Analyst"]
    },
    {
        "slug": "bba-ca", "title": "Bachelor of Business Administration (Computer Application)", "degree": "BBA (CA)",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Any Stream)",
        "overview": "The BBA (Computer Application) programme blends business management skills with modern computing technology. Students gain proficiency in software applications, business data management, and digital marketing, preparing them for dynamic roles in tech-driven enterprises.",
        "subjects": [("fa-laptop","Computer Applications"),("fa-database","Database Management"),("fa-chart-bar","Business Analytics"),("fa-globe","Web Technologies"),("fa-coins","Financial Accounting"),("fa-bullhorn","Digital Marketing")],
        "careers": ["IT Business Analyst","System Administrator","Digital Marketer","Operations Manager","E-commerce Executive"]
    },
    {
        "slug": "bca", "title": "Bachelor of Computer Applications", "degree": "BCA",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Any Stream)",
        "overview": "The BCA programme provides students with deep knowledge of computer science and applications, covering programming, system architecture, and software development. Graduates are well-equipped for IT industry roles and higher education.",
        "subjects": [("fa-code","Programming in Python/Java"),("fa-database","Database Systems"),("fa-network-wired","Computer Networks"),("fa-shield-halved","Cyber Security"),("fa-cloud","Cloud Computing"),("fa-robot","AI Fundamentals")],
        "careers": ["Software Developer","Web Developer","Database Administrator","IT Support Analyst","System Analyst"]
    },
    {
        "slug": "bcom", "title": "Bachelor of Commerce", "degree": "B.Com.",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Commerce/Any Stream)",
        "overview": "The B.Com. programme provides a comprehensive grounding in core commercial disciplines including accounting, finance, taxation, and economics. Students develop analytical skills and a strong business acumen essential for careers in commerce and finance.",
        "subjects": [("fa-coins","Financial Accounting"),("fa-file-invoice","Taxation"),("fa-chart-pie","Business Economics"),("fa-calculator","Cost Accounting"),("fa-scale-balanced","Business Law"),("fa-handshake","Corporate Governance")],
        "careers": ["Accountant","Tax Consultant","Financial Analyst","Auditor","Banking Executive"]
    },
    {
        "slug": "bcom-ca", "title": "Bachelor of Commerce (Computer Application)", "degree": "B.Com. (CA)",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Commerce/Any Stream)",
        "overview": "B.Com. (Computer Application) is a unique programme combining core commerce education with computer science. Students learn accounting software, business IT tools, and computer programming alongside traditional commerce subjects.",
        "subjects": [("fa-coins","Financial Accounting"),("fa-laptop","Computer Applications"),("fa-database","Database Management"),("fa-chart-line","E-Commerce"),("fa-file-invoice","Taxation"),("fa-code","Programming Basics")],
        "careers": ["Accounts Executive","IT Business Analyst","E-Commerce Manager","MIS Executive","Software Support"]
    },
    {
        "slug": "bcom-it", "title": "Bachelor of Commerce (Information Technology)", "degree": "B.Com. (IT)",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Commerce/Any Stream)",
        "overview": "B.Com. (Information Technology) bridges the gap between commerce and IT. Students gain expertise in business processes, information systems, and technology management, making them highly employable in IT-enabled service firms and banking sectors.",
        "subjects": [("fa-database","Information Systems"),("fa-network-wired","Networking Fundamentals"),("fa-coins","Accounting"),("fa-globe","Web Technologies"),("fa-cloud","ERP Systems"),("fa-chart-bar","Business Analytics")],
        "careers": ["IT Manager","Accounts Analyst","ERP Consultant","Business Intelligence Analyst","Network Administrator"]
    },
    {
        "slug": "bcom-digital-marketing", "title": "Bachelor of Commerce (Digital Marketing & Data Mining)", "degree": "B.Com. Digital Marketing & Data Mining",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Any Stream)",
        "overview": "This innovative programme equips students with advanced skills in digital marketing strategies, social media management, SEO/SEM, and data mining techniques. Graduates are prepared for the rapidly growing digital economy.",
        "subjects": [("fa-bullhorn","Digital Marketing Strategies"),("fa-chart-pie","Data Mining & Analytics"),("fa-hashtag","Social Media Marketing"),("fa-search","SEO & SEM"),("fa-coins","E-Commerce Management"),("fa-envelope","Email & Content Marketing")],
        "careers": ["Digital Marketing Manager","Data Analyst","Social Media Strategist","SEO Specialist","Content Creator"]
    },
    {
        "slug": "bcom-professional-accounting", "title": "Bachelor of Commerce (Professional Accounting)", "degree": "B.Com. (Professional Accounting)",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Commerce/Any Stream)",
        "overview": "B.Com. (Professional Accounting) is designed to produce industry-ready accounting professionals. The curriculum covers advanced taxation, audit, corporate law, and financial reporting aligned with professional standards.",
        "subjects": [("fa-coins","Advanced Financial Accounting"),("fa-file-invoice","Direct & Indirect Taxation"),("fa-scale-balanced","Corporate Law"),("fa-calculator","Cost & Management Accounting"),("fa-chart-line","Financial Reporting"),("fa-gavel","Auditing")],
        "careers": ["Chartered Accountant (CA aspirant)","Tax Consultant","Auditor","Finance Manager","Cost Accountant"]
    },
    {
        "slug": "bsc-cs", "title": "Bachelor of Science (Computer Science)", "degree": "B.Sc. (Computer Science)",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Science/Any Stream)",
        "overview": "The B.Sc. Computer Science programme develops strong programming and analytical skills. With a focus on algorithms, operating systems, databases, and software engineering, graduates are well-prepared for IT careers and higher studies.",
        "subjects": [("fa-code","Programming Languages"),("fa-database","Database Management"),("fa-network-wired","Operating Systems"),("fa-sitemap","Data Structures"),("fa-globe","Web Development"),("fa-shield-halved","Information Security")],
        "careers": ["Software Engineer","Web Developer","Database Administrator","System Analyst","IT Consultant"]
    },
    {
        "slug": "bsc-aids", "title": "B.Sc. Computer Science (Artificial Intelligence and Data Science)", "degree": "B.Sc. CS (AIDS)",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Science/Any Stream)",
        "overview": "This cutting-edge programme focuses on Artificial Intelligence and Data Science concepts using Python, machine learning algorithms, and big data tools. Students gain real-world exposure through live projects and industry mentorship.",
        "subjects": [("fa-brain","Artificial Intelligence"),("fa-robot","Machine Learning"),("fa-database","Big Data Analytics"),("fa-code","Python Programming"),("fa-chart-line","Data Visualization"),("fa-network-wired","Deep Learning")],
        "careers": ["AI Engineer","Data Scientist","ML Developer","Business Intelligence Analyst","Research Scientist"]
    },
    {
        "slug": "bsc-cyber-security", "title": "B.Sc. Computer Science with Cyber Security", "degree": "B.Sc. CS (Cyber Security)",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Science/Any Stream)",
        "overview": "This programme prepares students on the front lines of digital defence. Topics include ethical hacking, network security, cryptography, and digital forensics to tackle real-world cyber threats.",
        "subjects": [("fa-shield-halved","Cyber Security Fundamentals"),("fa-user-secret","Ethical Hacking"),("fa-lock","Cryptography"),("fa-network-wired","Network Security"),("fa-magnifying-glass","Digital Forensics"),("fa-file-shield","Security Compliance")],
        "careers": ["Cyber Security Analyst","Ethical Hacker","Network Security Engineer","Digital Forensics Analyst","Security Consultant"]
    },
    {
        "slug": "bsc-data-analytics", "title": "B.Sc. Computer Science with Data Analytics", "degree": "B.Sc. CS (Data Analytics)",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Science/Any Stream)",
        "overview": "Students learn to extract, process, and visualize insights from large datasets using modern tools like Python, R, Tableau, and SQL. The programme develops both technical and business intelligence skills.",
        "subjects": [("fa-chart-bar","Data Analytics"),("fa-code","Python & R Programming"),("fa-database","SQL & NoSQL"),("fa-chart-pie","Data Visualization"),("fa-brain","Statistical Modelling"),("fa-cloud","Cloud Analytics")],
        "careers": ["Data Analyst","Business Intelligence Developer","Analytics Consultant","Reporting Analyst","Data Engineer"]
    },
    {
        "slug": "bsc-ds-visualisation", "title": "B.Sc. Computer Science (Data Science & Visualisation)", "degree": "B.Sc. CS (DS & Visualisation)",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Science/Any Stream)",
        "overview": "Combining data science with advanced visualization techniques, this programme helps students transform complex data into compelling visual narratives for business decision-making.",
        "subjects": [("fa-chart-line","Data Science"),("fa-chart-pie","Data Visualisation"),("fa-brain","Machine Learning"),("fa-code","Python & Tableau"),("fa-database","Big Data"),("fa-magnifying-glass","Analytical Thinking")],
        "careers": ["Data Scientist","Visualization Analyst","Business Analyst","BI Developer","Research Analyst"]
    },
    {
        "slug": "bsc-ai-ml-ds", "title": "B.Sc. Computer Science (AI, ML & DS)", "degree": "B.Sc. CS (AI, ML & DS)*",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Science/Any Stream)",
        "overview": "This upcoming programme integrates Artificial Intelligence, Machine Learning, and Data Science into a unified curriculum, preparing students for the converging demands of modern tech industries. (*Subject to approval)",
        "subjects": [("fa-brain","Artificial Intelligence"),("fa-robot","Machine Learning"),("fa-database","Data Science"),("fa-code","Python"),("fa-chart-bar","Analytics"),("fa-network-wired","Neural Networks")],
        "careers": ["AI Researcher","ML Engineer","Data Scientist","Analytics Specialist","Tech Entrepreneur"]
    },
    {
        "slug": "bsc-agentic-ai", "title": "B.Sc. Computer Science (Agentic AI)", "degree": "B.Sc. CS (Agentic AI)*",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Science/Any Stream)",
        "overview": "An emerging programme in Agentic AI covering autonomous AI agents, multi-agent systems, reinforcement learning, and real-world AI deployment. (*Subject to approval)",
        "subjects": [("fa-robot","Agentic AI Systems"),("fa-brain","Reinforcement Learning"),("fa-code","LLM Development"),("fa-network-wired","Multi-Agent Systems"),("fa-cloud","AI Deployment"),("fa-chart-line","AI Ethics")],
        "careers": ["Agentic AI Developer","Prompt Engineer","AI Product Manager","Research Scientist","LLM Developer"]
    },
    {
        "slug": "bsc-generative-ai", "title": "B.Sc. Computer Science (Generative AI)", "degree": "B.Sc. CS (Generative AI)*",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Science/Any Stream)",
        "overview": "This forward-looking programme covers Generative AI models including GANs, LLMs, diffusion models, and AI content creation tools. (*Subject to approval)",
        "subjects": [("fa-wand-magic-sparkles","Generative Models"),("fa-brain","LLM & Transformers"),("fa-image","Image Synthesis"),("fa-code","Python & PyTorch"),("fa-robot","GANs & VAEs"),("fa-chart-line","AI Safety")],
        "careers": ["Generative AI Engineer","AI Content Architect","Prompt Engineer","AI Researcher","Product Designer (AI)"]
    },
    {
        "slug": "bsc-costume-design", "title": "Bachelor of Science (Costume Design and Fashion)", "degree": "B.Sc. (Costume Design and Fashion)",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Any Stream)",
        "overview": "The B.Sc. Costume Design and Fashion programme nurtures creative talent with training in textile science, garment construction, fashion illustration, and trend forecasting for the global fashion industry.",
        "subjects": [("fa-scissors","Garment Construction"),("fa-palette","Fashion Illustration"),("fa-shirt","Textile Science"),("fa-gem","Fashion Merchandising"),("fa-globe","Global Fashion Trends"),("fa-brush","Costume Design")],
        "careers": ["Fashion Designer","Costume Designer","Textile Merchandiser","Stylist","Fashion Entrepreneur"]
    },
    {
        "slug": "bsc-it", "title": "Bachelor of Science (Information Technology)", "degree": "B.Sc. (IT)",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Science/Any Stream)",
        "overview": "The B.Sc. IT programme covers a wide spectrum of IT skills from software development and networking to database management and cloud computing, producing job-ready IT professionals.",
        "subjects": [("fa-code","Programming Fundamentals"),("fa-network-wired","Computer Networks"),("fa-database","Database Systems"),("fa-cloud","Cloud Computing"),("fa-shield-halved","Cyber Security Basics"),("fa-globe","Web Technologies")],
        "careers": ["IT Support Engineer","Network Admin","Software Developer","System Analyst","Web Developer"]
    },
    {
        "slug": "bsc-devops-cloud", "title": "B.Sc. Computer Science (Dev Ops & Cloud)", "degree": "B.Sc. CS (DevOps & Cloud)",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Science/Any Stream)",
        "overview": "This programme covers modern DevOps practices and cloud computing technologies including CI/CD pipelines, containerization (Docker/Kubernetes), and major cloud platforms (AWS, Azure, GCP).",
        "subjects": [("fa-cloud","Cloud Computing"),("fa-code","DevOps Tools"),("fa-box","Docker & Kubernetes"),("fa-code-branch","CI/CD Pipelines"),("fa-server","Linux Administration"),("fa-shield-halved","Cloud Security")],
        "careers": ["DevOps Engineer","Cloud Architect","Site Reliability Engineer","Cloud Consultant","Platform Engineer"]
    },
    {
        "slug": "bsc-fullstack", "title": "B.Sc. Computer Science (Full Stack Web Development)", "degree": "B.Sc. CS (Full Stack Web Dev)",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Science/Any Stream)",
        "overview": "This hands-on programme trains students in both frontend and backend web development using modern frameworks and technologies like React, Node.js, MongoDB, and REST APIs.",
        "subjects": [("fa-code","HTML, CSS & JavaScript"),("fa-react","React.js"),("fa-server","Node.js & Express"),("fa-database","MongoDB & SQL"),("fa-globe","REST APIs"),("fa-code-branch","Version Control (Git)")],
        "careers": ["Full Stack Developer","Frontend Engineer","Backend Developer","Web Developer","Software Engineer"]
    },
    {
        "slug": "bsc-psychology", "title": "Bachelor of Science (Psychology)", "degree": "B.Sc. Psychology",
        "duration": "3 Years (6 Semesters)", "eligibility": "+2 Pass (Any Stream)",
        "overview": "The B.Sc. Psychology programme explores human behaviour, mental processes, and psychological theories. Students are trained in counselling, cognitive psychology, and research methods for careers in mental health and human services.",
        "subjects": [("fa-brain","General Psychology"),("fa-heart","Counselling Skills"),("fa-clipboard","Research Methods"),("fa-child","Developmental Psychology"),("fa-comments","Social Psychology"),("fa-notes-medical","Abnormal Psychology")],
        "careers": ["Counsellor","HR Professional","Psychologist (PG required)","Researcher","School Counsellor"]
    },
]

os.makedirs("programs/ug", exist_ok=True)

for c in courses:
    html = make_course_page(
        c["slug"], c["title"], c["degree"],
        c["duration"], c["eligibility"], c["overview"],
        c["subjects"], c["careers"], None
    )
    fname = f"programs/ug/{c['slug']}.html"
    with open(fname, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Created {fname}")

# ug.html links
links_map = {
    "BBA": "/programs/ug/bba.html",
    "BBA(Computer Application)": "/programs/ug/bba-ca.html",
    "BCA": "/programs/ug/bca.html",
    "B.Com.": "/programs/ug/bcom.html",
    "B.Com. (Computer Application)": "/programs/ug/bcom-ca.html",
    "B.Com. (Information Technology)": "/programs/ug/bcom-it.html",
    "B.Com. Digital Marketing &amp; Data Mining": "/programs/ug/bcom-digital-marketing.html",
    "B.Com. (Professional Accounting)": "/programs/ug/bcom-professional-accounting.html",
    "B.Sc. (Computer Science)": "/programs/ug/bsc-cs.html",
    "B.Sc. Computer Science (Artificial Intelligence and Data Science)": "/programs/ug/bsc-aids.html",
    "B.Sc. Computer Science with Cyber Security": "/programs/ug/bsc-cyber-security.html",
    "B.Sc. Computer Science with Data Analytics": "/programs/ug/bsc-data-analytics.html",
    "B.Sc. Computer Science (Data Science &amp; Visualisation)": "/programs/ug/bsc-ds-visualisation.html",
    "B.Sc. Computer Science (AI, ML &amp; DS) *": "/programs/ug/bsc-ai-ml-ds.html",
    "B.Sc. Computer Science (Agentic AI) *": "/programs/ug/bsc-agentic-ai.html",
    "B.Sc. Computer Science (Generative AI) *": "/programs/ug/bsc-generative-ai.html",
    "B.Sc. (Costume Design and Fashion)": "/programs/ug/bsc-costume-design.html",
    "B.Sc. (Information Technology)": "/programs/ug/bsc-it.html",
    "B.Sc. Computer Science (Dev ops &amp; Cloud)": "/programs/ug/bsc-devops-cloud.html",
    "B.Sc. Computer Science (Full Stack Web Development)": "/programs/ug/bsc-fullstack.html",
    "B.Sc. Psychology": "/programs/ug/bsc-psychology.html",
}

with open("programs/ug.html", 'r', encoding='utf-8') as f:
    ug_content = f.read()

for name, link in links_map.items():
    ug_content = ug_content.replace(f'<a href="#"', f'<a href="{link}"', 1)

with open("programs/ug.html", 'w', encoding='utf-8') as f:
    f.write(ug_content)

print("Updated ug.html links.")
print("All done!")
