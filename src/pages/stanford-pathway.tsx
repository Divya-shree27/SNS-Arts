import { PageHeader } from '../components/page-header'

export const StanfordPathwayPage = () => {
    return `
    ${PageHeader(
        'Your Pathway to Stanford', 
        'We equip students with our patented GenAI-powered Design Thinking framework and the mindset to excel at elite universities worldwide', 
        '/static/images/stanford_workshop.jpg',
        'Stanford Pathway'
    )}

    <!-- Stanford-Trained Faculty -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="relative">
                    <div class="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                     <div class="rounded-2xl overflow-hidden shadow-2xl relative">
                        <img src="/static/images/Dr. SNS Rajalakshmi College of Arts and Science Web/Stanford-Trained Faculty.png" alt="Stanford Trained Faculty" class="w-full h-full object-cover">
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transstakeholder p-8">
                            <p class="text-white font-bold text-lg">World-Class Mentorship</p>
                            <p class="text-gray-300 text-sm">Direct guidance from industry experts</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Stanford-Trained Faculty</h2>
                    <p class="text-xl text-gray-600 leading-relaxed mb-8">
                        Our educators have been directly trained by Stanford University alumni in design thinking, innovation, and entrepreneurial mindset development. They bring world-class methodologies directly to the classroom.
                    </p>
                    
                    <div class="space-y-6">
                        <div class="flex items-start group">
                            <div class="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 mr-6 group-hover:bg-orange-600 transition duration-300">
                                <i class="fas fa-chalkboard-teacher text-2xl text-orange-600 group-hover:text-white transition duration-300"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Design Thinking Mastery</h3>
                                <p class="text-gray-600">Stanford's proven 5-stage process: Empathize, Define, Ideate, Prototype, Test.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start group">
                            <div class="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 mr-6 group-hover:bg-blue-600 transition duration-300">
                                <i class="fas fa-lightbulb text-2xl text-blue-600 group-hover:text-white transition duration-300"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Innovation Labs</h3>
                                <p class="text-gray-600">Hands-on projects using Stanford's d.College methodology for creative problem-solving.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start group">
                            <div class="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 mr-6 group-hover:bg-green-600 transition duration-300">
                                <i class="fas fa-rocket text-2xl text-green-600 group-hover:text-white transition duration-300"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Entrepreneurial Mindset</h3>
                                <p class="text-gray-600">Startup thinking and lean methodology for young innovators.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Roadmap -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">The Roadmap</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Your Journey to Excellence</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    A structured 12-year journey from Undergraduate to Post Graduate Programs, building the foundation for elite university admission.
                </p>
            </div>

            <div class="space-y-12">
                <!-- Stage 1 -->
                 <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 hover:shadow-xl transition duration-300 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
                    <div class="grid md:grid-cols-12 gap-8 relative z-10">
                        <div class="md:col-span-4">
                            <div class="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold mb-4">Stage 1</div>
                            <h3 class="text-3xl font-bold text-gray-900 mb-2">Foundation Stage</h3>
                            <p class="text-lg text-gray-500 font-medium mb-6">Undergraduate - Semester 1</p>
                            <p class="text-gray-600 leading-relaxed">
                                Sparking curiosity and wonder through project-based discovery and initial project-based learning.
                            </p>
                        </div>
                        <div class="md:col-span-8 grid sm:grid-cols-2 gap-8 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-8">
                            <div>
                                <h4 class="font-bold text-gray-900 mb-4 flex items-center"><i class="fas fa-bullseye text-orange-600 mr-2"></i> Objectives</h4>
                                <ul class="space-y-3 text-gray-600 text-sm">
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Curiosity & Wonder Development</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Creative Thinking & Exploration</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Collaboration & Communication</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-4 flex items-center"><i class="fas fa-cogs text-orange-600 mr-2"></i> Methods</h4>
                                <ul class="space-y-3 text-gray-600 text-sm">
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Project-Based Learning</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Storytelling & Creative Arts</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Hands-On STEM Activities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Stage 2 -->
                <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 hover:shadow-xl transition duration-300 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
                     <div class="grid md:grid-cols-12 gap-8 relative z-10">
                        <div class="md:col-span-4">
                            <div class="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-4">Stage 2</div>
                            <h3 class="text-3xl font-bold text-gray-900 mb-2">Building Stage</h3>
                            <p class="text-lg text-gray-500 font-medium mb-6">Grades 6 - 8</p>
                            <p class="text-gray-600 leading-relaxed">
                                Mastering the frameworks of innovation and applying critical thinking to real-world challenges.
                            </p>
                        </div>
                        <div class="md:col-span-8 grid sm:grid-cols-2 gap-8 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-8">
                            <div>
                                <h4 class="font-bold text-gray-900 mb-4 flex items-center"><i class="fas fa-bullseye text-blue-600 mr-2"></i> Objectives</h4>
                                <ul class="space-y-3 text-gray-600 text-sm">
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Design Thinking Framework Mastery</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Critical Thinking & Analysis</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Leadership & Teamwork</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-4 flex items-center"><i class="fas fa-cogs text-blue-600 mr-2"></i> Methods</h4>
                                <ul class="space-y-3 text-gray-600 text-sm">
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Stanford Design Challenges</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Innovation Labs & Prototyping</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Hackathons & Competitions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Stage 3 -->
                <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 hover:shadow-xl transition duration-300 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
                     <div class="grid md:grid-cols-12 gap-8 relative z-10">
                        <div class="md:col-span-4">
                            <div class="inline-block bg-red-100 text-[#91A61A] px-4 py-1 rounded-full text-sm font-bold mb-4">Stage 3</div>
                            <h3 class="text-3xl font-bold text-gray-900 mb-2">Excellence Stage</h3>
                            <p class="text-lg text-gray-500 font-medium mb-6">Grades 9 - 12</p>
                            <p class="text-gray-600 leading-relaxed">
                                Accelerating towards global success with advanced research, startups, and elite university preparation.
                            </p>
                        </div>
                        <div class="md:col-span-8 grid sm:grid-cols-2 gap-8 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-8">
                            <div>
                                <h4 class="font-bold text-gray-900 mb-4 flex items-center"><i class="fas fa-bullseye text-[#B0CB1F] mr-2"></i> Objectives</h4>
                                <ul class="space-y-3 text-gray-600 text-sm">
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Advanced Research & Innovation</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Entrepreneurial Mindset</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Global Competency</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-4 flex items-center"><i class="fas fa-cogs text-[#B0CB1F] mr-2"></i> Methods</h4>
                                <ul class="space-y-3 text-gray-600 text-sm">
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Real-World Startup Projects</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Patents & Publications</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Alumni Mentorship</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- OKR Framework -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                 <h2 class="text-4xl font-bold text-gray-900 mb-6">OKRs (Objectives & Key Results)</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    We use Stanford-style goal-setting frameworks to track student progress and ensure excellence.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:shadow-xl transition duration-300 group text-center">
                    <div class="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                        <i class="fas fa-graduation-cap text-3xl text-[#B0CB1F]"></i>
                    </div>
                    <div class="text-4xl font-bold text-gray-900 mb-2">95%+</div>
                    <p class="text-sm font-bold text-[#B0CB1F] uppercase tracking-wider mb-2">Academic Excellence</p>
                    <p class="text-gray-500 text-sm">Target Score for Board Exams</p>
                </div>

                <div class="p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:shadow-xl transition duration-300 group text-center">
                    <div class="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                        <i class="fas fa-lightbulb text-3xl text-orange-600"></i>
                    </div>
                    <div class="text-4xl font-bold text-gray-900 mb-2">5+</div>
                    <p class="text-sm font-bold text-orange-600 uppercase tracking-wider mb-2">Innovation Projects</p>
                    <p class="text-gray-500 text-sm">Real-World Solutions Per Year</p>
                </div>

                <div class="p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:shadow-xl transition duration-300 group text-center">
                    <div class="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                        <i class="fas fa-trophy text-3xl text-blue-600"></i>
                    </div>
                    <div class="text-4xl font-bold text-gray-900 mb-2">3+</div>
                    <p class="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Key Competitions</p>
                    <p class="text-gray-500 text-sm">National & International Awards</p>
                </div>

                <div class="p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:shadow-xl transition duration-300 group text-center">
                    <div class="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                        <i class="fas fa-users text-3xl text-green-600"></i>
                    </div>
                    <div class="text-4xl font-bold text-gray-900 mb-2">100%</div>
                    <p class="text-sm font-bold text-green-600 uppercase tracking-wider mb-2">Leadership</p>
                    <p class="text-gray-500 text-sm">Student Council or Club Role</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Design Thinking Playbook & BMC -->
    <section class="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div class="absolute inset-0 bg-[url('https://www.transstakeholdertextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span class="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2 block">The Toolkit</span>
                    <h2 class="text-4xl font-bold mb-6">Mastering the Tools of Innovation</h2>
                    <p class="text-gray-400 text-lg mb-8 leading-relaxed">
                        We don't just teach theory. We equip students with powerful frameworks like the Design Thinking Playbook and Business Model Canvas (BMC) to deconstruct problems and build viable ventures.
                    </p>
                    
                    <div class="space-y-6">
                        <div class="flex items-start">
                             <i class="fas fa-book-reader text-2xl text-orange-500 mt-1 mr-4"></i>
                             <div>
                                 <h4 class="text-xl font-bold mb-2">Design Thinking Playbook</h4>
                                 <p class="text-gray-400 text-sm">A comprehensive guide covering Empathize, Define, Ideate, Prototype, and Test phases with actionable worksheets.</p>
                             </div>
                        </div>
                        <div class="flex items-start">
                             <i class="fas fa-chart-pie text-2xl text-blue-500 mt-1 mr-4"></i>
                             <div>
                                 <h4 class="text-xl font-bold mb-2">Business Model Canvas</h4>
                                 <p class="text-gray-400 text-sm">A strategic management template for developing new business models: Value Props, Customer Segments, Revenue Streams, and more.</p>
                             </div>
                        </div>
                    </div>

                    <div class="mt-10">
                         <a href="/contact" class="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg border border-transstakeholder hover:border-orange-400">
                            <i class="fas fa-download mr-2"></i>
                            Request Complete Playbook
                        </a>
                    </div>
                </div>
                
                <div class="relative">
                    <!-- abstract visual representation of BMC -->
                    <div class="grid grid-cols-3 gap-2 p-4 bg-white/10 backdrop-blur rounded-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition duration-500">
                        <div class="col-span-1 bg-blue-500/20 rounded-lg p-4 h-24 flex items-center justify-center"><i class="fas fa-handshake text-2xl text-blue-400"></i></div>
                        <div class="col-span-1 bg-green-500/20 rounded-lg p-4 h-24 flex items-center justify-center"><i class="fas fa-tasks text-2xl text-green-400"></i></div>
                        <div class="row-span-2 bg-orange-500/20 rounded-lg p-4 flex items-center justify-center"><i class="fas fa-gift text-4xl text-orange-400"></i></div>
                        <div class="col-span-1 bg-purple-500/20 rounded-lg p-4 h-24 flex items-center justify-center"><i class="fas fa-users text-2xl text-purple-400"></i></div>
                        <div class="col-span-1 bg-pink-500/20 rounded-lg p-4 h-24 flex items-center justify-center"><i class="fas fa-heart text-2xl text-pink-400"></i></div>
                        <div class="col-span-1 bg-yellow-500/20 rounded-lg p-4 h-20 flex items-center justify-center"><i class="fas fa-tag text-2xl text-yellow-400"></i></div>
                        <div class="col-span-2 bg-[#B0CB1F]/20 rounded-lg p-4 h-20 flex items-center justify-center"><i class="fas fa-chart-line text-2xl text-red-400"></i></div>
                    </div>
                     <p class="text-center text-gray-500 text-sm mt-4">Interactive Business Model Canvas Framework</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-white relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Begin Your Stanford Pathway Today</h2>
            <p class="text-xl lg:text-2xl mb-12 text-gray-600 font-light max-w-2xl mx-auto">
                Join India's first Design Thinking Autonomous College and get trained by industry experts to achieve your global dreams.
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/admissions" class="inline-flex items-center justify-center bg-orange-600 text-white hover:bg-orange-700 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
                    Apply for Admission
                </a>
                <a href="/contact" class="inline-flex items-center justify-center bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-900 hover:text-gray-900 px-10 py-4 rounded-full font-bold text-lg transition">
                    Schedule Visit
                </a>
            </div>
        </div>
    </section>
  `;
};
