
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<!-- Hanging Tag 1: NAAC A++ -->
    <div class="fixed top-[22%] right-0 z-50 swing">
        <div class="bg-gradient-to-br from-green-600 to-emerald-600 text-white px-4 py-6 rounded-l-2xl shadow-2xl">
            <span class="font-extrabold text-sm uppercase tracking-widest"
                style="writing-mode: vertical-rl; text-orientation: mixed; letter-spacing: 0.2em;">NAAC A++</span>
        </div>
    </div>

    <!-- Hanging Tag 2: Brochure -->
    <div class="fixed top-[36%] right-0 z-50 swing" style="animation-delay: 0.3s;">
        <a href="https://snsacademy.org/brochure/" target="_blank"
            class="bg-gradient-to-br from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-8 rounded-l-2xl shadow-2xl flex flex-col items-center space-y-3 group transition-all">
            <i class="fas fa-file-pdf text-2xl group-hover:scale-110 transition-transform duration-300"></i>
            <span class="font-extrabold text-sm uppercase tracking-widest"
                style="writing-mode: vertical-rl; text-orientation: mixed; letter-spacing: 0.2em;">BROCHURE</span>
        </a>
    </div>

    <!-- Floating CTA Button (Mobile) -->
    <div class="fixed bottom-6 left-6 z-50 lg:hidden">
        <a href="/admissions"
            class="bg-[#E31E24] hover:bg-red-700 text-white px-6 py-4 rounded-full shadow-2xl flex items-center space-x-2 pulse-slow">
            <i class="fas fa-pen-to-square"></i>
            <span class="font-bold">Apply Now</span>
        </a>
    </div>

    <!-- Navigation -->
    <nav class="bg-white shadow-md sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <a href="/" class="flex items-center space-x-3">
                    <img src="/static/images/Logo.png" alt="SNS College of Technology Logo" class="h-16 w-auto">
                    <div>
                        <h1 class="text-xl font-bold text-gray-900">SNS College of Technology</h1>
                        <p class="text-xs text-gray-500">Autonomous | NAAC A++ | NBA Accreditation</p>
                    </div>
                </a>

                <div class="hidden md:flex items-center space-x-6">
                    <a href="/" class="text-gray-700 hover:text-[#E31E24] font-medium">Home</a>

                    <!-- Programs Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-[#E31E24] font-medium flex items-center h-20">
                            Programs <i class="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                        <div
                            class="absolute hidden group-hover:block bg-white shadow-2xl rounded-xl py-4 w-72 left-0 mt-0 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                            <div class="px-2">
                                <!-- UG Programs Category -->
                                <div class="relative group/sub">
                                    <button class="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 hover:text-[#E31E24] hover:bg-gray-50 rounded-lg transition-colors">
                                        <span>UG Programs</span>
                                        <i class="fas fa-chevron-right text-[10px] opacity-50 group-hover/sub:translate-x-1 transition-transform"></i>
                                    </button>
                                    <div class="absolute left-full top-0 ml-1 hidden group-hover/sub:block bg-white shadow-2xl rounded-xl py-4 w-[340px] animate-in fade-in slide-in-from-left-2 duration-300">
                                        <div class="px-3">
                                            <h4 class="text-[#E31E24] font-bold text-xs uppercase tracking-wider mb-3 px-4 py-1 border-b border-gray-100">Undergraduate Courses</h4>
                                            <div class="grid gap-1">
                                                <a href="/programs/btech-aids.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">AI & Data Science (B.Tech. AIDS)</a>
                                                <a href="/programs/btech-aiml.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">AI & Machine Learning (B.Tech. AIML)</a>
                                                <a href="/programs/btech-ds.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Data Sciences* (B.Tech. DS)</a>
                                                <a href="/programs/be-cse-iot.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">CSE (IoT, Cyber Security, Blockchain)</a>
                                                <a href="/programs/be-csd.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Computer Science and Design (B.E. CSD)</a>
                                                <a href="/programs/be-aero.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Aerospace Engineering (B.E. AERO)</a>
                                                <a href="/programs/be-bme.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Bio-Medical Engineering (B.E. BME)</a>
                                                <a href="/programs/btech-ft.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Food Technology (B.Tech. FT)</a>
                                                <a href="/programs/be-mech-mct-am.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Mechanical & Mechatronics (AM)</a>
                                                <a href="/programs/be-cse.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Computer Science & Eng (B.E. CSE)</a>
                                                <a href="/programs/btech-it.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Information Technology (B.Tech. IT)</a>
                                                <a href="/programs/be-cst.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Computer Science & Tech (B.E. CST)</a>
                                                <a href="/programs/be-civil.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Civil Engineering (B.E. CIVIL)</a>
                                                <a href="/programs/be-ece.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Electronics & Communication (B.E. ECE)</a>
                                                <a href="/programs/be-eee.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Electrical & Electronics Eng (B.E. EEE)</a>
                                                <a href="/programs/be-mct.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Mechatronics Engineering (B.E. MCT)</a>
                                                <a href="/programs/be-mech.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Mechanical Engineering (B.E. MECH)</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- PG Programs Category -->
                                <div class="relative group/sub">
                                    <button class="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 hover:text-[#E31E24] hover:bg-gray-50 rounded-lg transition-colors">
                                        <span>PG Programs</span>
                                        <i class="fas fa-chevron-right text-[10px] opacity-50 group-hover/sub:translate-x-1 transition-transform"></i>
                                    </button>
                                    <div class="absolute left-full top-0 ml-1 hidden group-hover/sub:block bg-white shadow-2xl rounded-xl py-4 w-[340px] animate-in fade-in slide-in-from-left-2 duration-300">
                                        <div class="px-3">
                                            <h4 class="text-[#E31E24] font-bold text-xs uppercase tracking-wider mb-3 px-4 py-1 border-b border-gray-100">Postgraduate Courses</h4>
                                            <div class="grid gap-1">
                                                <a href="/programs/mca.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Master of Computer Applications (MCA)</a>
                                                <a href="/programs/mba.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Master of Business Administration (MBA)</a>
                                                <a href="/programs/mba-ba.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors leading-tight">MBA in Business Analytics (MBA)</a>
                                                <a href="/programs/phd.html" class="px-4 py-2 text-gray-600 hover:text-[#E31E24] hover:bg-red-50 rounded-lg text-xs transition-colors">Doctor of Philosophy (Ph.D.)</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Infrastructure Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-[#E31E24] font-medium flex items-center">
                            Infrastructure <i class="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                        <div
                            class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-48 mt-0 z-50">
                            <a href="/facilities"
                                class="block px-4 py-2 hover:bg-red-50 text-gray-700">Facilities</a>
                            <a href="/gallery" class="block px-4 py-2 hover:bg-red-50 text-gray-700">Gallery</a>
                            <a href="/transport" class="block px-4 py-2 hover:bg-red-50 text-gray-700">Transport</a>
                        </div>
                    </div>

                    <!-- Beyond Academics Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-[#E31E24] font-medium flex items-center">
                            Beyond Academics <i class="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                        <div
                            class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-56 mt-0 z-50">
                            <a href="/sports-clubs" class="block px-4 py-2 hover:bg-red-50 text-gray-700">Sports &
                                Clubs</a>
                            <a href="/innovation" class="block px-4 py-2 hover:bg-red-50 text-gray-700">Innovation
                                Hub</a>
                            <a href="/events" class="block px-4 py-2 hover:bg-red-50 text-gray-700">Events &
                                Celebrations</a>
                            <a href="/success-stories" class="block px-4 py-2 hover:bg-red-50 text-gray-700">Success
                                Stories</a>
                        </div>
                    </div>

                    <!-- Meet Us Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-[#E31E24] font-medium flex items-center">
                            Meet Us <i class="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                        <div
                            class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-56 mt-0 z-50">
                            <a href="/about" class="block px-4 py-2 hover:bg-red-50 text-gray-700">About Us</a>
                            <a href="/contact" class="block px-4 py-2 hover:bg-red-50 text-gray-700">Contact Us</a>
                            <a href="/mandatory-disclosure"
                                class="block px-4 py-2 hover:bg-red-50 text-gray-700">Mandatory Disclosure</a>
                        </div>
                    </div>

                    <a href="/admissions"
                        class="bg-[#E31E24] hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition">
                        Apply Now <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>

                <button id="mobile-menu-btn" class="md:hidden text-gray-700">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
            <div class="px-4 py-4 space-y-3">
                <a href="/" class="block text-gray-700 hover:text-[#E31E24] font-medium py-2">Home</a>

                <!-- Programs -->
                <div>
                    <button
                        class="w-full text-left text-gray-700 hover:text-[#E31E24] font-medium py-2 flex justify-between items-center"
                        onclick="document.getElementById('mobile-programs').classList.toggle('hidden')">
                        Programs <i class="fas fa-chevron-down"></i>
                    </button>
                    <div id="mobile-programs" class="hidden pl-4 space-y-2 mt-2">
                        <!-- UG -->
                        <button
                            class="w-full text-left text-gray-600 hover:text-[#E31E24] font-medium py-1 flex justify-between items-center"
                            onclick="document.getElementById('mobile-ug').classList.toggle('hidden')">
                            UG Programs <i class="fas fa-plus text-xs"></i>
                        </button>
                        <div id="mobile-ug" class="hidden pl-4 space-y-1 mb-4">
                            <a href="/programs/btech-aids.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">AI & Data Science (B.Tech. AIDS)</a>
                            <a href="/programs/btech-aiml.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">AI & Machine Learning (B.Tech. AIML)</a>
                            <a href="/programs/btech-ds.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">Data Sciences* (B.Tech. DS)</a>
                            <a href="/programs/be-cse-iot.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">CSE (IoT, CS, Blockchain)</a>
                            <a href="/programs/be-csd.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">Computer Science & Design</a>
                            <a href="/programs/be-aero.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">Aerospace Engineering</a>
                            <a href="/programs/be-bme.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">Bio-Medical Engineering</a>
                            <a href="/programs/btech-ft.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">Food Technology</a>
                            <a href="/programs/be-mech-mct-am.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">Mechanical & Mechatronics (AM)</a>
                            <a href="/programs/be-cse.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">CS Engineering (B.E. CSE)</a>
                            <a href="/programs/btech-it.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">Information Technology (B.Tech. IT)</a>
                            <a href="/programs/be-cst.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">CS Technology (B.E. CST)</a>
                            <a href="/programs/be-civil.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">Civil Engineering (B.E. CIVIL)</a>
                            <a href="/programs/be-ece.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">Electronics (B.E. ECE)</a>
                            <a href="/programs/be-eee.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">Electrical (B.E. EEE)</a>
                            <a href="/programs/be-mct.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">Mechatronics (B.E. MCT)</a>
                            <a href="/programs/be-mech.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">Mechanical (B.E. MECH)</a>
                        </div>
                        <!-- PG -->
                        <button
                            class="w-full text-left text-gray-600 hover:text-[#E31E24] font-medium py-1 flex justify-between items-center"
                            onclick="document.getElementById('mobile-pg').classList.toggle('hidden')">
                            PG Programs <i class="fas fa-plus text-xs"></i>
                        </button>
                        <div id="mobile-pg" class="hidden pl-4 space-y-1">
                            <a href="/programs/mca.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">MCA</a>
                            <a href="/programs/mba.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">MBA</a>
                            <a href="/programs/mba-ba.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">MBA Business Analytics</a>
                            <a href="/programs/phd.html" class="block text-gray-500 hover:text-[#E31E24] py-1 text-sm">Ph.D.</a>
                        </div>
                    </div>
                </div>

                <!-- Infrastructure -->
                <div>
                    <button
                        class="w-full text-left text-gray-700 hover:text-[#E31E24] font-medium py-2 flex justify-between items-center"
                        onclick="document.getElementById('mobile-infrastructure').classList.toggle('hidden')">
                        Infrastructure <i class="fas fa-chevron-down"></i>
                    </button>
                    <div id="mobile-infrastructure" class="hidden pl-4 space-y-2 mt-2">
                        <a href="/facilities" class="block text-gray-600 hover:text-[#E31E24] py-1">Facilities</a>
                        <a href="/gallery" class="block text-gray-600 hover:text-[#E31E24] py-1">Gallery</a>
                        <a href="/transport" class="block text-gray-600 hover:text-[#E31E24] py-1">Transport</a>
                    </div>
                </div>

                <!-- Beyond Academics -->
                <div>
                    <button
                        class="w-full text-left text-gray-700 hover:text-[#E31E24] font-medium py-2 flex justify-between items-center"
                        onclick="document.getElementById('mobile-beyond').classList.toggle('hidden')">
                        Beyond Academics <i class="fas fa-chevron-down"></i>
                    </button>
                    <div id="mobile-beyond" class="hidden pl-4 space-y-2 mt-2">
                        <a href="/sports-clubs" class="block text-gray-600 hover:text-[#E31E24] py-1">Sports &
                            Clubs</a>
                        <a href="/innovation" class="block text-gray-600 hover:text-[#E31E24] py-1">Innovation Hub</a>
                        <a href="/events" class="block text-gray-600 hover:text-[#E31E24] py-1">Events &
                            Celebrations</a>
                        <a href="/success-stories" class="block text-gray-600 hover:text-[#E31E24] py-1">Success
                            Stories</a>
                    </div>
                </div>

                <!-- Meet Us -->
                <div>
                    <button
                        class="w-full text-left text-gray-700 hover:text-[#E31E24] font-medium py-2 flex justify-between items-center"
                        onclick="document.getElementById('mobile-meetus').classList.toggle('hidden')">
                        Meet Us <i class="fas fa-chevron-down"></i>
                    </button>
                    <div id="mobile-meetus" class="hidden pl-4 space-y-2 mt-2">
                        <a href="/about" class="block text-gray-600 hover:text-[#E31E24] py-1">About Us</a>
                        <a href="/contact" class="block text-gray-600 hover:text-[#E31E24] py-1">Contact Us</a>
                        <a href="/mandatory-disclosure" class="block text-gray-600 hover:text-[#E31E24] py-1">Mandatory
                            Disclosure</a>
                    </div>
                </div>

                <a href="/admissions" class="block bg-[#E31E24] text-white text-center px-6 py-3 rounded-lg font-bold">
                    Apply Now <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </nav>
`;

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                    <div class="flex items-center space-x-3 mb-4">
                        <img src="/static/images/Logo.png" alt="SNS College of Technology Logo"
                            class="h-12 w-auto bg-white rounded p-1">
                        <div>
                            <h3 class="text-white font-bold">SNS College of Technology</h3>
                            <p class="text-xs">Autonomous | NAAC A++ | NBA</p>
                        </div>
                    </div>
                    <p class="text-sm leading-relaxed">
                        TNEA Code: 2726<br>
                        Established: 2002<br>
                        Coimbatore, Tamil Nadu
                    </p>
                </div>

                <div>
                    <h4 class="text-white font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="/" class="hover:text-white transition">Home</a></li>
                        <li><a href="/about" class="hover:text-white transition">About Us</a></li>
                        <li><a href="/facilities" class="hover:text-white transition">Facilities</a></li>
                        <li><a href="/gallery" class="hover:text-white transition">Gallery</a></li>
                        <li><a href="/sports-clubs" class="hover:text-white transition">Sports & Clubs</a></li>
                        <li><a href="/events" class="hover:text-white transition">Events & Celebrations</a></li>
                        <li><a href="/success-stories" class="hover:text-white transition">Success Stories</a></li>
                        <li><a href="/transport" class="hover:text-white transition">Transport</a></li>
                        <li><a href="/innovation" class="hover:text-white transition">Innovation Hub</a></li>
                        <li><a href="/brochure" class="hover:text-white transition">Download Brochure</a></li>
                        <li><a href="/admissions" class="hover:text-white transition">Admissions</a></li>
                        <li><a href="/contact" class="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-white font-bold mb-4">Top Programs</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="/programs/btech-aids.html" class="hover:text-white transition">B.Tech. AI & DS</a></li>
                        <li><a href="/programs/be-cse.html" class="hover:text-white transition">B.E. CSE</a></li>
                        <li><a href="/programs/mba.html" class="hover:text-white transition">MBA</a></li>
                        <li><a href="/programs/mca.html" class="hover:text-white transition">MCA</a></li>
                        <li><a href="/programs/phd.html" class="hover:text-white transition">Ph.D.</a></li>
                        <li><a href="/mandatory-disclosure" class="hover:text-white transition">Mandatory Disclosure</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-white font-bold mb-4">Connect</h4>
                    <ul class="space-y-2 text-sm mb-4">
                        <li><i class="fas fa-map-marker-alt mr-2"></i>SNS Kalvi Nagar,<br />Sathy Main Road (NH-209),<br />Vazhiyampalayam, Saravanampatti (Post),<br />Coimbatore - 641035.</li>
                        <li><a href="tel:+919003655855" class="hover:text-white transition"><i
                                    class="fas fa-phone mr-2"></i>Admission: +91 90036 55855</a></li>
                        <li><a href="tel:+919566423456" class="hover:text-white transition"><i
                                    class="fas fa-phone mr-2"></i>Call: +91 95664 23456</a></li>
                        <li><a href="mailto:snsct@snsgroups.com" class="hover:text-white transition"><i
                                    class="fas fa-envelope mr-2"></i>snsct@snsgroups.com</a></li>
                        <li><a href="mailto:job@snsgroups.com" class="hover:text-white transition"><i
                                    class="fas fa-briefcase mr-2"></i>Career: job@snsgroups.com</a></li>
                    </ul>
                    <div class="flex space-x-3">
                        <a href="https://www.facebook.com/snsinstitutions" target="_blank"
                            class="w-10 h-10 bg-gray-800 hover:bg-[#E31E24] rounded-lg flex items-center justify-center transition">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/snsacademyorg" target="_blank"
                            class="w-10 h-10 bg-gray-800 hover:bg-[#E31E24] rounded-lg flex items-center justify-center transition">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@snsinstitutions" target="_blank"
                            class="w-10 h-10 bg-gray-800 hover:bg-[#E31E24] rounded-lg flex items-center justify-center transition">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="https://www.linkedin.com/College/snsinstitutions/" target="_blank"
                            class="w-10 h-10 bg-gray-800 hover:bg-[#E31E24] rounded-lg flex items-center justify-center transition">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-800 pt-8 text-center text-sm">
                <p>&copy; 2026 SNS College of Technology. All rights reserved.</p>
                <p class="mt-2 text-[#E31E24] font-semibold">Redesigning Common Minds Since 2002 | We are Design Thinkers</p>
                <p class="mt-1 text-xs">Building Future Innovators Through Design Thinking Framework</p>
                <p class="mt-3 text-[#E31E24] font-bold"><i class="fas fa-headset mr-2"></i>Helpline: 95664 23456</p>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    
    <!-- Instagram Floating Icon -->
    <a href="https://www.instagram.com/snsacademy" class="instagram-float" target="_blank" rel="noopener noreferrer"
        title="Follow us on Instagram">
        <i class="fab fa-instagram"></i>
    </a>
    <!-- WhatsApp Floating Icon -->
    <a href="https://wa.me/919629937861" class="whatsapp-float" target="_blank" rel="noopener noreferrer"
        title="Chat with us on WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>
`;

class AppHeader extends HTMLElement {
    connectedCallback() {
        this.appendChild(headerTemplate.content.cloneNode(true));
        this.setupMobileMenu();
        this.setActiveLink();
    }

    setupMobileMenu() {
        const mobileMenuBtn = this.querySelector('#mobile-menu-btn');
        const mobileMenu = this.querySelector('#mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Close mobile menu when clicking a link
        this.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu) mobileMenu.classList.add('hidden');
            });
        });
    }

    setActiveLink() {
        const path = window.location.pathname;
        const links = this.querySelectorAll('.hidden.md\\:flex a'); // Only highlight desktop links for now to keep it clean
        let currentLink = null;

        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href !== '/' && path.includes(href)) {
                if (!currentLink || href.length > currentLink.getAttribute('href').length) {
                    currentLink = link;
                }
            }
        });

        if (path === '/' || path === '/index.html') {
            const homeLinks = Array.from(links).filter(link => link.getAttribute('href') === '/');
            homeLinks.forEach(link => {
                link.classList.add('text-[#E31E24]', 'font-bold');
                link.classList.remove('text-gray-700');
            });
        } else if (currentLink) {
            currentLink.classList.add('text-[#E31E24]', 'font-bold');
            currentLink.classList.remove('text-gray-700');

            // Highlight stakeholder dropdown button
            const dropdown = currentLink.closest('.relative.group');
            if (dropdown) {
                const btn = dropdown.querySelector('button');
                if (btn) {
                    btn.classList.add('text-[#E31E24]', 'font-bold');
                    btn.classList.remove('text-gray-700');
                }
            }
        }
    }
}
customElements.define('app-header', AppHeader);

class AppFooter extends HTMLElement {
    connectedCallback() {
        this.appendChild(footerTemplate.content.cloneNode(true));
    }
}
customElements.define('app-footer', AppFooter);
