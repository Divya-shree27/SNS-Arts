
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
            class="bg-gradient-to-br from-[#B0CB1F] to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-8 rounded-l-2xl shadow-2xl flex flex-col items-center space-y-3 group transition-all">
            <i class="fas fa-file-pdf text-2xl group-hover:scale-110 transition-transform duration-300"></i>
            <span class="font-extrabold text-sm uppercase tracking-widest"
                style="writing-mode: vertical-rl; text-orientation: mixed; letter-spacing: 0.2em;">BROCHURE</span>
        </a>
    </div>

    <!-- Floating CTA Button (Mobile) -->
    <div class="fixed bottom-6 left-6 z-50 lg:hidden">
        <a href="/admissions"
            class="bg-[#B0CB1F] hover:bg-[#91A61A] text-white px-6 py-4 rounded-full shadow-2xl flex items-center space-x-2 pulse-slow">
            <i class="fas fa-pen-to-square"></i>
            <span class="font-bold">Apply Now</span>
        </a>
    </div>

    <!-- Navigation -->
    <nav class="bg-white shadow-md sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
            <div class="flex justify-between items-center h-16">
                <a href="/" class="flex items-center space-x-2 flex-shrink-0">
                    <img src="/static/images/Logo.png" alt="Dr. SNS Rajalakshmi College of Arts and Science Logo" class="h-12 w-auto">
                    <div>
                        <h1 class="text-base font-bold text-gray-900 leading-tight whitespace-nowrap">Dr. SNS Rajalakshmi College of Arts and Science</h1>
                        <p class="text-xs text-gray-500">Autonomous | NAAC A+</p>
                    </div>
                </a>

                <div class="hidden md:flex items-center space-x-3">
                    <a href="/" class="text-gray-700 hover:text-[#B0CB1F] font-medium text-base">Home</a>

                    
                    <!-- Programs Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-[#B0CB1F] font-medium flex items-center h-16 text-base">
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
                    <!-- Infrastructure Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-[#B0CB1F] font-medium flex items-center text-base">
                            Infrastructure <i class="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                        <div
                            class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-48 mt-0 z-50">
                            <a href="/facilities"
                                class="block px-4 py-2 hover:bg-gray-50 text-gray-700">Facilities</a>
                            <a href="/gallery" class="block px-4 py-2 hover:bg-gray-50 text-gray-700">Gallery</a>
                            <a href="/transport" class="block px-4 py-2 hover:bg-gray-50 text-gray-700">Transport</a>
                        </div>
                    </div>

                    <!-- Beyond Academics Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-[#B0CB1F] font-medium flex items-center text-base">
                            Beyond Academics <i class="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                        <div
                            class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-52 mt-0 z-50">
                            <a href="/sports-clubs" class="block px-4 py-2 hover:bg-gray-50 text-gray-700">Sports & Clubs</a>
                            <a href="/innovation" class="block px-4 py-2 hover:bg-gray-50 text-gray-700">Innovation Hub</a>
                            <a href="/events" class="block px-4 py-2 hover:bg-gray-50 text-gray-700">Events & Celebrations</a>
                            <a href="/success-stories" class="block px-4 py-2 hover:bg-gray-50 text-gray-700">Success Stories</a>
                        </div>
                    </div>

                    <!-- Meet Us Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-[#B0CB1F] font-medium flex items-center text-base">
                            Meet Us <i class="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                        <div
                            class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-52 mt-0 z-50">
                            <a href="/about" class="block px-4 py-2 hover:bg-gray-50 text-gray-700">About Us</a>
                            <a href="/contact" class="block px-4 py-2 hover:bg-gray-50 text-gray-700">Contact Us</a>
                            <a href="/mandatory-disclosure"
                                class="block px-4 py-2 hover:bg-gray-50 text-gray-700">Mandatory Disclosure</a>
                        </div>
                    </div>

                    <a href="/admissions"
                        class="bg-[#B0CB1F] hover:bg-[#91A61A] text-white px-4 py-2 rounded-lg font-bold transition text-base whitespace-nowrap">
                        Enquiry Now <i class="fas fa-arrow-right ml-1"></i>
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
                <a href="/" class="block text-gray-700 hover:text-[#B0CB1F] font-medium py-2">Home</a>

                
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
                <!-- Infrastructure -->
                <div>
                    <button
                        class="w-full text-left text-gray-700 hover:text-[#B0CB1F] font-medium py-2 flex justify-between items-center"
                        onclick="document.getElementById('mobile-infrastructure').classList.toggle('hidden')">
                        Infrastructure <i class="fas fa-chevron-down"></i>
                    </button>
                    <div id="mobile-infrastructure" class="hidden pl-4 space-y-2 mt-2">
                        <a href="/facilities" class="block text-gray-600 hover:text-[#B0CB1F] py-1">Facilities</a>
                        <a href="/gallery" class="block text-gray-600 hover:text-[#B0CB1F] py-1">Gallery</a>
                        <a href="/transport" class="block text-gray-600 hover:text-[#B0CB1F] py-1">Transport</a>
                    </div>
                </div>

                <!-- Beyond Academics -->
                <div>
                    <button
                        class="w-full text-left text-gray-700 hover:text-[#B0CB1F] font-medium py-2 flex justify-between items-center"
                        onclick="document.getElementById('mobile-beyond').classList.toggle('hidden')">
                        Beyond Academics <i class="fas fa-chevron-down"></i>
                    </button>
                    <div id="mobile-beyond" class="hidden pl-4 space-y-2 mt-2">
                        <a href="/sports-clubs" class="block text-gray-600 hover:text-[#B0CB1F] py-1">Sports &
                            Clubs</a>
                        <a href="/innovation" class="block text-gray-600 hover:text-[#B0CB1F] py-1">Innovation Hub</a>
                        <a href="/events" class="block text-gray-600 hover:text-[#B0CB1F] py-1">Events &
                            Celebrations</a>
                        <a href="/success-stories" class="block text-gray-600 hover:text-[#B0CB1F] py-1">Success
                            Stories</a>
                    </div>
                </div>

                <!-- Meet Us -->
                <div>
                    <button
                        class="w-full text-left text-gray-700 hover:text-[#B0CB1F] font-medium py-2 flex justify-between items-center"
                        onclick="document.getElementById('mobile-meetus').classList.toggle('hidden')">
                        Meet Us <i class="fas fa-chevron-down"></i>
                    </button>
                    <div id="mobile-meetus" class="hidden pl-4 space-y-2 mt-2">
                        <a href="/about" class="block text-gray-600 hover:text-[#B0CB1F] py-1">About Us</a>
                        <a href="/contact" class="block text-gray-600 hover:text-[#B0CB1F] py-1">Contact Us</a>
                        <a href="/mandatory-disclosure" class="block text-gray-600 hover:text-[#B0CB1F] py-1">Mandatory
                            Disclosure</a>
                    </div>
                </div>

                <a href="/admissions" class="block bg-[#B0CB1F] text-white text-center px-6 py-3 rounded-lg font-bold">
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
                        <img src="/static/images/Logo.png" alt="Dr. SNS Rajalakshmi College of Arts and Science Logo"
                            class="h-12 w-auto bg-white rounded p-1">
                        <div>
                            <h3 class="text-white font-bold">Dr. SNS Rajalakshmi College of Arts and Science</h3>
                            <p class="text-xs">Autonomous | NAAC A+</p>
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
                        <li><a href="#" class="hover:text-white transition">B.Sc. CS (AI & DS)</a></li>
                        <li><a href="#" class="hover:text-white transition">B.Com. (PA)</a></li>
                        <li><a href="#" class="hover:text-white transition">MBA</a></li>
                        <li><a href="#" class="hover:text-white transition">MCA</a></li>
                        <li><a href="#" class="hover:text-white transition">B.Sc. Psychology</a></li>
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
                        <li><a href="mailto:office@drsnsrcas.ac.in" class="hover:text-white transition"><i
                                    class="fas fa-envelope mr-2"></i>office@drsnsrcas.ac.in</a></li>
                        <li><a href="mailto:job@snsgroups.com" class="hover:text-white transition"><i
                                    class="fas fa-briefcase mr-2"></i>Career: job@snsgroups.com</a></li>
                    </ul>
                    <div class="flex space-x-3">
                        <a href="https://www.facebook.com/snsinstitutions" target="_blank"
                            class="w-10 h-10 bg-gray-800 hover:bg-[#B0CB1F] rounded-lg flex items-center justify-center transition">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/snsinstitutions" target="_blank"
                            class="w-10 h-10 bg-gray-800 hover:bg-[#B0CB1F] rounded-lg flex items-center justify-center transition">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@snsinstitutions" target="_blank"
                            class="w-10 h-10 bg-gray-800 hover:bg-[#B0CB1F] rounded-lg flex items-center justify-center transition">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/snsinstitutions/" target="_blank"
                            class="w-10 h-10 bg-gray-800 hover:bg-[#B0CB1F] rounded-lg flex items-center justify-center transition">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-800 pt-8 text-center text-sm">
                <p>&copy; 2026 Dr. SNS Rajalakshmi College of Arts and Science. All rights reserved.</p>
                <p class="mt-2 text-[#B0CB1F] font-semibold">Redesigning Common Minds Since 2002 | We are Design Thinkers</p>
                <p class="mt-1 text-xs">Building Future Innovators Through Design Thinking Framework</p>
                <p class="mt-3 text-[#B0CB1F] font-bold"><i class="fas fa-headset mr-2"></i>Helpline: 95664 23456</p>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    
    <!-- Instagram Floating Icon -->
    <a href="https://www.instagram.com/snsinstitutions" class="instagram-float" target="_blank" rel="noopener noreferrer"
        title="Follow us on Instagram">
        <i class="fab fa-instagram"></i>
    </a>
    <!-- WhatsApp Floating Icon -->
    <a href="https://wa.me/919003655855" class="whatsapp-float" target="_blank" rel="noopener noreferrer"
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
                link.classList.add('text-[#B0CB1F]', 'font-bold');
                link.classList.remove('text-gray-700');
            });
        } else if (currentLink) {
            currentLink.classList.add('text-[#B0CB1F]', 'font-bold');
            currentLink.classList.remove('text-gray-700');

            // Highlight stakeholder dropdown button
            const dropdown = currentLink.closest('.relative.group');
            if (dropdown) {
                const btn = dropdown.querySelector('button');
                if (btn) {
                    btn.classList.add('text-[#B0CB1F]', 'font-bold');
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
