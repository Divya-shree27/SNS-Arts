import { PageHeader } from '../components/page-header'

// Innovation Hub Page
export const InnovationPage = () => {
    return `
    ${PageHeader(
        'SNS Innovation Hub',
        'Powered by India\'s First Patented GenAI Design Thinking Framework | India\'s Y-Combinator for Colleges',
        '/static/images/pillar_industry.jpg',
        'Innovation Hub'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 class="text-4xl font-bold mb-6">About SNS iHub</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">
                        SNS iHub is an initiative by SNS Institutions to foster startups by providing a prototyping space immersed in an ambience of creativity and our <strong class="text-orange-600">patented GenAI-powered Design Thinking framework</strong>.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        The center helps identify societal/industrial needs and solve them using our AI-enhanced design thinking approach, mentored by experts from academia and industry.
                    </p>
                </div>
                <div class="bg-purple-50 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold mb-6">RADICAL Technologies</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start"><i class="fas fa-robot text-orange-600 mr-3 mt-1"></i><span>Robotics & Automation</span></li>
                        <li class="flex items-start"><i class="fas fa-vr-cardboard text-orange-600 mr-3 mt-1"></i><span>AR/VR Technology</span></li>
                        <li class="flex items-start"><i class="fas fa-brain text-orange-600 mr-3 mt-1"></i><span>Data Science/AI/ML</span></li>
                        <li class="flex items-start"><i class="fas fa-network-wired text-orange-600 mr-3 mt-1"></i><span>IoT/Cybersecurity</span></li>
                        <li class="flex items-start"><i class="fas fa-wifi text-orange-600 mr-3 mt-1"></i><span>Communication Tech</span></li>
                        <li class="flex items-start"><i class="fas fa-cube text-orange-600 mr-3 mt-1"></i><span>Additive Manufacturing</span></li>
                        <li class="flex items-start"><i class="fas fa-code text-orange-600 mr-3 mt-1"></i><span>Low Code/No Code</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- SHAAARP Industry Verticals -->
    <section class="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">SHAAARP Industry Verticals</h2>
                <p class="text-xl text-gray-600">Focus areas for innovation and startup development</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-city text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Smart City & Manufacturing</h3>
                    <p class="text-sm text-gray-600 text-center">IoT, automation, smart infrastructure</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-heartbeat text-3xl text-[#B0CB1F]"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Healthcare</h3>
                    <p class="text-sm text-gray-600 text-center">AI diagnostics, telemedicine, digital health</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-seedling text-3xl text-green-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Agriculture & Food</h3>
                    <p class="text-sm text-gray-600 text-center">Precision farming, food tech, supply chain</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-shopping-cart text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Retail FMCG</h3>
                    <p class="text-sm text-gray-600 text-center">E-commerce, consumer goods, retail analytics</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-car text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Automotive & Aerospace</h3>
                    <p class="text-sm text-gray-600 text-center">Autonomous vehicles, aerospace engineering</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-shield-alt text-3xl text-indigo-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Defense, Government, Legal</h3>
                    <p class="text-sm text-gray-600 text-center">Security, compliance, legal tech</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-building text-3xl text-pink-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Real Estate</h3>
                    <p class="text-sm text-gray-600 text-center">PropTech, smart buildings, analytics</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-futbol text-3xl text-yellow-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Sports, Media & Entertainment</h3>
                    <p class="text-sm text-gray-600 text-center">Content creation, gaming, sports tech</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-university text-3xl text-teal-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">BFSI - Fintech/Banking</h3>
                    <p class="text-sm text-gray-600 text-center">Financial services, banking technology</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-bolt text-3xl text-cyan-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Power, Oil, Energy</h3>
                    <p class="text-sm text-gray-600 text-center">Energy management, renewables, utilities</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover col-span-full md:col-span-1 lg:col-start-3">
                    <div class="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-user-circle text-3xl text-rose-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Personal Services</h3>
                    <p class="text-sm text-gray-600 text-center">EdTech, Dating/Marriage, HR Tech</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Innovation Labs</h2>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div class="bg-white rounded-xl p-8">
                    <h3 class="text-2xl font-bold mb-4">I-TECH Labs</h3>
                    <p class="text-gray-700">Inter-disciplinary research space for AR/VR, AI, IoT, Robotics, and 3D printing innovations.</p>
                </div>
                <div class="bg-white rounded-xl p-8">
                    <h3 class="text-2xl font-bold mb-4">BOT Lab</h3>
                    <p class="text-gray-700">Coimbatore's first Center-of-Excellence in Robotics Process Automation with Automation Anywhere.</p>
                </div>
                <div class="bg-white rounded-xl p-8">
                    <h3 class="text-2xl font-bold mb-4">Piston Factory</h3>
                    <p class="text-gray-700">Real-time project workspace and vehicle fabrication for national competitions.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Mango Big7 Clubs -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">Mango Big7 Clubs</h2>
                <p class="text-xl text-gray-600 mb-2">Student clubs focused on industry leaders and career pathways</p>
                <p class="text-lg text-orange-600 font-semibold">Exposure to world's leading companies and consulting firms</p>
            </div>
            
            <!-- Tech Giants -->
            <div class="mb-12">
                <h3 class="text-3xl font-bold text-center mb-8 text-orange-600">Tech Giants Club</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <!-- Meta -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Meta</h4>
                        <p class="text-xs text-gray-600 mt-1">Social Media & VR</p>
                    </div>
                    
                    <!-- Microsoft -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M0 0h11.377v11.372H0V0zm12.623 0H24v11.372H12.623V0zM0 12.623h11.377V24H0V12.623zm12.623 0H24V24H12.623V12.623z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Microsoft</h4>
                        <p class="text-xs text-gray-600 mt-1">Cloud & Software</p>
                    </div>
                    
                    <!-- Apple -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Apple</h4>
                        <p class="text-xs text-gray-600 mt-1">Hardware & Design</p>
                    </div>
                    
                    <!-- Amazon -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.548.41-3.156.615-4.83.615-3.268 0-6.306-.756-9.116-2.268-.44-.236-.81-.46-1.11-.67-.18-.124-.3-.22-.36-.29-.09-.11-.12-.21-.07-.31zm23.696-3.017c-.225-.183-.506-.244-.84-.244-.334 0-.664.061-.99.183-.327.122-.61.244-.85.366-.24.122-.45.214-.63.275-.18.061-.33.092-.45.092-.12 0-.21-.031-.27-.092-.06-.061-.09-.153-.09-.275 0-.122.03-.244.09-.366.06-.122.15-.244.27-.366.12-.122.27-.244.45-.366.18-.122.39-.214.63-.275.24-.061.51-.092.81-.092.3 0 .6.031.9.092.3.061.57.153.81.275.24.122.45.244.63.366.18.122.33.244.45.366.12.122.21.244.27.366.06.122.09.244.09.366 0 .122-.03.214-.09.275-.06.061-.15.092-.27.092-.12 0-.27-.031-.45-.092-.18-.061-.39-.153-.63-.275-.24-.122-.52-.244-.84-.366-.32-.122-.65-.183-.99-.183z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Amazon</h4>
                        <p class="text-xs text-gray-600 mt-1">E-commerce & AWS</p>
                    </div>
                    
                    <!-- Netflix -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-[#B0CB1F] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c2.873-.41 5.398-.82 8.489-.82V9.63L9.191 1.05z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Netflix</h4>
                        <p class="text-xs text-gray-600 mt-1">Streaming & Content</p>
                    </div>
                    
                    <!-- NVIDIA -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.764 0c-.473 0-.857.384-.857.857v22.286c0 .473.384.857.857.857h8.472c.473 0 .857-.384.857-.857V.857c0-.473-.384-.857-.857-.857H7.764zm4.236 2.571c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">NVIDIA</h4>
                        <p class="text-xs text-gray-600 mt-1">GPUs & AI Chips</p>
                    </div>
                    
                    <!-- Google -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Google</h4>
                        <p class="text-xs text-gray-600 mt-1">Search & AI</p>
                    </div>
                    
                    <!-- Oracle -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-[#91A61A] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Oracle</h4>
                        <p class="text-xs text-gray-600 mt-1">Database & Cloud</p>
                    </div>
                    
                    <!-- Tesla -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-[#B0CB1F] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 5.362L8.16 15h7.68L12 5.362zM12 0l8.485 21H3.515L12 0z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Tesla</h4>
                        <p class="text-xs text-gray-600 mt-1">EV & Innovation</p>
                    </div>
                </div>
            </div>
            
            <!-- Consulting & Finance -->
            <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-lg border border-indigo-100">
                <h3 class="text-3xl font-bold text-center mb-8 text-indigo-600">Consulting & Finance Club</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <!-- KPMG -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/KPMG_blue_logo.svg/500px-KPMG_blue_logo.svg.png" alt="KPMG" class="w-full h-full object-contain">
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">KPMG</h4>
                        <p class="text-xs text-gray-600 mt-1">Big 4 Audit</p>
                    </div>
                    
                    <!-- EY -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" alt="EY" class="w-full h-full object-contain">
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">EY</h4>
                        <p class="text-xs text-gray-600 mt-1">Big 4 Advisory</p>
                    </div>
                    
                    <!-- Deloitte -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" alt="Deloitte" class="w-full h-full object-contain">
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Deloitte</h4>
                        <p class="text-xs text-gray-600 mt-1">Big 4 Consulting</p>
                    </div>
                    
                    <!-- JP Morgan -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Logo_2008_1.svg" alt="JP Morgan" class="w-full h-full object-contain">
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">JP Morgan</h4>
                        <p class="text-xs text-gray-600 mt-1">Investment Banking</p>
                    </div>
                    
                    <!-- PwC -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/PwC_Logo_2010.svg" alt="PwC" class="w-full h-full object-contain">
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">PwC</h4>
                        <p class="text-xs text-gray-600 mt-1">Big 4 Tax & Advisory</p>
                    </div>
                    
                    <!-- BCG -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Boston_Consulting_Group_2020_logo.svg" alt="BCG" class="w-full h-full object-contain">
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">BCG</h4>
                        <p class="text-xs text-gray-600 mt-1">Strategy Consulting</p>
                    </div>
                    
                    <!-- Bain -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Bain_%26_Company_logo.svg" alt="Bain" class="w-full h-full object-contain">
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Bain</h4>
                        <p class="text-xs text-gray-600 mt-1">Management Consulting</p>
                    </div>
                    
                    <!-- McKinsey -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/McKinsey_%26_Company_Script_Mark_Logo.svg" alt="McKinsey" class="w-full h-full object-contain">
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">McKinsey</h4>
                        <p class="text-xs text-gray-600 mt-1">Top-tier Consulting</p>
                    </div>
                </div>
            </div>
            
            <!-- Club Benefits -->
            <div class="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 class="text-2xl font-bold text-center mb-6">What Students Learn</h3>
                <div class="grid md:grid-cols-4 gap-6 text-center">
                    <div>
                        <i class="fas fa-users-cog text-4xl mb-3"></i>
                        <h4 class="font-bold mb-2">Industry Insights</h4>
                        <p class="text-sm opacity-90">Deep dive into business models</p>
                    </div>
                    <div>
                        <i class="fas fa-project-diagram text-4xl mb-3"></i>
                        <h4 class="font-bold mb-2">Case Studies</h4>
                        <p class="text-sm opacity-90">Real-world problem solving</p>
                    </div>
                    <div>
                        <i class="fas fa-handshake text-4xl mb-3"></i>
                        <h4 class="font-bold mb-2">Networking</h4>
                        <p class="text-sm opacity-90">Connect with alumni & professionals</p>
                    </div>
                    <div>
                        <i class="fas fa-graduation-cap text-4xl mb-3"></i>
                        <h4 class="font-bold mb-2">Career Prep</h4>
                        <p class="text-sm opacity-90">Internship & placement guidance</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;
};

// About Page
export const AboutPage = () => {
    return `
    ${PageHeader(
        'About Dr. SNS Rajalakshmi College of Arts and Science',
        'Redesigning Common Minds & Business Towards Excellence',
        '/static/images/hero.png',
        'About Us'
    )}

    <!-- Vision & Philosophy Section -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="relative">
                    <div class="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <img src="/static/images/secondary.png" alt="Students Learning" class="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]">
                    <div class="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg max-w-xs">
                        <p class="text-orange-600 font-bold text-lg mb-1">Our Tagline</p>
                        <p class="text-gray-800 text-sm font-medium">Redesigning Common Minds & Business Towards Excellence</p>
                    </div>
                </div>
                
                <div>
                    <div class="mb-12">
                        <span class="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Vision</span>
                        <h2 class="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                            Building an <span class="text-orange-600">Entrepreneurial Mindset</span>
                        </h2>
                        <p class="text-lg text-gray-600 leading-relaxed mb-6">
                            We believe in nurturing the next generation of innovators through our <strong>GenAI-Powered Design Thinking Framework (Patented)</strong>. Our approach goes beyond textbooks, embedding empathy and creativity into the core of learning.
                        </p>
                        <p class="text-lg text-gray-600 leading-relaxed">
                            <strong>Sincerity, Nobility, and Service</strong> are not just our core values—they are the guiding principles that shape every student's character at Dr. SNS Rajalakshmi College of Arts and Science.
                        </p>
                    </div>

                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                <i class="fas fa-brain text-xl text-orange-600"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 text-lg">Design Thinking</h4>
                                <p class="text-gray-600 text-sm">Solving real-world problems with empathy.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                <i class="fas fa-users text-xl text-blue-600"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 text-lg">3P Culture</h4>
                                <p class="text-gray-600 text-sm">Purpose, Process, People driving holistic growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

            <!-- 5 Pillars Mission (Visual Grid) -->
            <section class="py-24 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16">
                        <span class="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Mission</span>
                        <h2 class="text-4xl font-bold mb-6 text-gray-900">5 Pillars of Excellence</h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            A comprehensive framework designed to nurture well-rounded global citizens.
                        </p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- Pillar 1 -->
                        <div class="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition duration-300">
                            <div class="h-48 overflow-hidden">
                                <img src="/static/images/Learning.png" alt="Learning" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                            </div>
                            <div class="p-8">
                                <h3 class="text-xl font-bold mb-3 text-gray-900">1. Learning & Teaching</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Practice Design Thinking-Based Academic Learning & Teaching. We move from rote memorization to active understanding.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Pillar 2 -->
                        <div class="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition duration-300">
                            <div class="h-48 overflow-hidden">
                                <img src="/static/images/Skill.png" alt="Skill Development" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                            </div>
                            <div class="p-8">
                                <h3 class="text-xl font-bold mb-3 text-gray-900">2. Skill & Career Development</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Build life skills through various clubs and contests. Preparing students for careers that don't even exist yet.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Pillar 3 -->
                        <div class="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition duration-300">
                            <div class="h-48 overflow-hidden">
                                <img src="/static/images/Creativity.png" alt="Creativity" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                            </div>
                            <div class="p-8">
                                <h3 class="text-xl font-bold mb-3 text-gray-900">3. Centre for Creativity</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Hands-on experience solving key industrial problems with latest technologies in our Innovation Hub.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Pillar 4 -->
                        <div class="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition duration-300">
                            <div class="h-48 overflow-hidden">
                                <img src="/static/images/IIPC.png" alt="Industry Partnership" class="w-full h-full object-cover transform group-hover:scale-100 transition duration-700">
                            </div>
                            <div class="p-8">
                                <h3 class="text-xl font-bold mb-3 text-gray-900">4. Industry Partnership</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Connecting classrooms with boardrooms. Students learn business sense directly from industry leaders.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Pillar 5 -->
                        <div class="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition duration-300">
                            <div class="h-48 overflow-hidden">
                                <img src="/static/images/SRI.png" alt="Social Responsibility" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                            </div>
                            <div class="p-8">
                                <h3 class="text-xl font-bold mb-3 text-gray-900">5. Social Responsibility</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Cultivating compassion. Giving back to society through impactful social service initiatives.
                                </p>
                            </div>
                        </div>
                        
                        <!-- 3P Summary Card with Image Overlay -->
                            <div class="relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center p-8 text-center text-white">

                                <!-- Background Image -->
                                <img 
                                    src="/static/images/3P.jpg"
                                    alt="3P Culture"
                                    class="absolute inset-0 w-full h-full object-cover"
                                />

                                <!-- Dark Overlay -->
                                <div class="absolute inset-0 bg-black/80"></div>

                                <!-- Content -->
                                <div class="relative z-10">
                                    <h3 class="text-2xl font-bold mb-4">3P Culture</h3>

                                    <div class="flex justify-center space-x-4 mb-6">
                                        <span class="bg-white/10 px-3 py-1 rounded text-sm">Purpose</span>
                                        <span class="bg-white/10 px-3 py-1 rounded text-sm">Process</span>
                                        <span class="bg-white/10 px-3 py-1 rounded text-sm">People</span>
                                    </div>

                                    <p class="text-gray-300 text-sm">
                                        Our holistic operating system for educational excellence.
                                    </p>
                                </div>

                            </div>

                    </div>
                </div>
            </section>

    <!-- Leadership Team Section -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Leadership</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Visionaries Behind SNS</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Guiding the institution with wisdom, innovation, and a commitment to excellence.
                </p>
            </div>

            <div class="grid lg:grid-cols-3 gap-10">
                <!-- Founder Chairman -->
                <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition duration-300">
                    <div class="flex items-center mb-6">
                        <img src="/static/images/chairman.png" alt="Dr. S.N. Subbramanian" class="w-20 h-20 rounded-full object-cover mr-4 border-2 border-white shadow-sm">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900"><span class="text-[70%]">Deiva Thiru</span><br/><span class="text-[90%] font-[900]">Dr. S.N. Subbramanian</span></h3>
                            <p class="text-orange-600 text-sm font-semibold mt-1">Founder Chairman</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <p class="text-gray-600 text-sm leading-relaxed italic">
                            "We believe that every student is a design thinker. Through our unique Design Thinking framework and 3P Culture, we prepare students not just for exams, but for life."
                        </p>
                    </div>
                </div>

                <!-- Correspondent -->
                <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition duration-300">
                    <div class="flex items-center mb-6">
                        <img src="/static/images/correspondent.png" alt="Dr. S. Rajalakshmi" class="w-20 h-20 rounded-full object-cover mr-4 border-2 border-white shadow-sm">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900">Dr. S. Rajalakshmi</h3>
                            <p class="text-orange-600 text-sm font-semibold mt-1">Chairman / Correspondent</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <p class="text-gray-600 text-sm leading-relaxed italic">
                            "We focus on holistic development through our 5 Pillars Mission. Our experienced faculty nurtures each student's unique potential, preparing them for global opportunities."
                        </p>
                    </div>
                </div>

                <!-- Technical Director -->
                <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition duration-300">
                    <div class="flex items-center mb-6">
                        <img src="/static/images/td.png" alt="Nalin SNS" class="w-20 h-20 rounded-full object-cover mr-4 border-2 border-white shadow-sm">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900">Nalin SNS</h3>
                            <p class="text-orange-600 text-sm font-semibold mt-1">Technical Director</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <p class="text-gray-600 text-sm leading-relaxed italic">
                            "We aim to build <strong class='text-gray-900'>1000 AI startups in 10 years</strong>. SNS iHub serves as India's Y-Combinator, focused on SHAAARP industries and RADICAL technologies."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
};

// Contact Page
export const ContactPage = () => {
    return `
    ${PageHeader(
        'Contact Us',
        'We\'d love to hear from you. Visit us or get in touch today!',
        '/static/images/hero.png',
        'Contact Us'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 class="text-3xl font-bold mb-8">Get In Touch</h2>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <i class="fas fa-map-marker-alt text-3xl text-orange-600 mr-4"></i>
                            <div>
                                <h3 class="font-bold text-xl mb-2">Address</h3>
                                <p class="text-gray-700">Dr. SNS Rajalakshmi College of Arts and Science,<br>Thudiyalur - Saravanampatti Road,<br>Vellakinar Post,<br>Coimbatore - 641029.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-phone text-3xl text-orange-600 mr-4"></i>
                            <div>
                                <h3 class="font-bold text-xl mb-2">Phone</h3>
                                <p class="text-gray-700">Admission: +91 96299 37861<br>Landline: +91 75300 93730</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-envelope text-3xl text-green-600 mr-4"></i>
                            <div>
                                <h3 class="font-bold text-xl mb-2">Email</h3>
                                <p class="text-gray-700">General: info@snsacademy.org<br>Career: job@snsgroups.com</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-clock text-3xl text-orange-600 mr-4"></i>
                            <div>
                                <h3 class="font-bold text-xl mb-2">Visit Us</h3>
                                <p class="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM<br>Saturday: 9:00 AM - 1:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 rounded-2xl p-8">
                    <h3 class="text-2xl md:text-3xl font-bold mb-6 text-center">Admission and Enquiry Form</h3>
                    
                    <!-- Bitrix24 Form with Custom Styling -->
                    <style>
                        /* Bitrix Form Custom Styles */
                        .b24-form-wrapper {
                            background: transstakeholder !important;
                            border: none !important;
                            padding: 0 !important;
                            box-shadow: none !important;
                        }
                        
                        .b24-form-header {
                            display: none !important;
                        }
                        
                        .b24-form-field {
                            margin-bottom: 24px !important;
                        }
                        
                        /* Remove Bitrix auto separators */
                        .b24-form-separator,
                        .b24-form-field-separator,
                        .b24-form-field::before,
                        .b24-form-field::after {
                            display: none !important;
                            content: none !important;
                            height: 0 !important;
                            border: none !important;
                        }
                        
                        /* Hide labels visually but keep for Bitrix logic */
                        .b24-form-control-label {
                            position: absolute !important;
                            opacity: 0 !important;
                            pointer-events: none !important;
                        }
                        
                        /* Input styling */
                        .b24-form-control {
                            width: 100% !important;
                            background: #ffffff !important;
                            border: 1px solid #dfe3e8 !important;
                            border-radius: 14px !important;
                            padding: 16px 18px !important;
                            font-size: 15px !important;
                            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
                            color: #111 !important;
                            box-shadow: none !important;
                        }
                        
                        .b24-form-control::placeholder {
                            color: #9aa0a6 !important;
                            font-weight: 400;
                        }
                        
                        .b24-form-control:focus {
                            border-color: #111 !important;
                            outline: none !important;
                        }
                        
                        /* Dropdown styling */
                        .b24-form-dropdown {
                            border-radius: 14px !important;
                            border: 1px solid #fcfcfc !important;
                            box-shadow: 0 12px 28px rgba(0,0,0,0.12) !important;
                        }
                        
                        .b24-form-dropdown-item {
                            padding: 14px 18px !important;
                            font-size: 15px !important;
                            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
                        }
                        
                        .b24-form-dropdown-item:hover {
                            background: #f5f6f8 !important;
                        }
                        
                        /* Submit button */
                        .b24-form-btn {
                            width: 100% !important;
                            margin-top: 28px !important;
                            padding: 18px !important;
                            border-radius: 16px !important;
                            background: #e94a28 !important;
                            color: #000 !important;
                            font-size: 18px !important;
                            font-weight: 600 !important;
                            border: none !important;
                            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
                            cursor: pointer !important;
                            transition: all 0.3s ease !important;
                        }
                        
                        .b24-form-btn:hover {
                            background: #d43d1f !important;
                            transform: translateY(-1px);
                        }
                        
                        /* Footer text */
                        .b24-form-sign {
                            margin-top: 20px !important;
                            font-size: 13px !important;
                            color: #9aa0a6 !important;
                        }
                    </style>
                    
                    <script data-b24-form="inline/18/m4ecvi" data-skip-moving="true">
                    (function(w,d,u){
                        var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
                        var h=d.getElementsByTagName('script')[0];h.stakeholderNode.insertBefore(s,h);
                    })(window,document,'https://cdn.bitrix24.com/b11752903/crm/form/loader_18.js');
                    </script>
                    
                    <script>
                    /* Placeholder + Asterisk Fix */
                    setTimeout(function () {
                        document.querySelectorAll('.b24-form-field').forEach(function (field) {
                            const label = field.querySelector('.b24-form-control-label');
                            const input = field.querySelector('.b24-form-control');
                            
                            if (label && input) {
                                let text = label.textContent.replace(/\\s*\\*$/, '').trim();
                                let required = label.textContent.includes('*');
                                input.placeholder = required ? text + ' *' : text;
                            }
                        });
                    }, 500);
                    </script>
                </div>
            </div>
        </div>
    </section>
  `;
};

// Admissions Page
export const AdmissionsPage = () => {
    return `
    ${PageHeader(
        'Admissions 2026-27',
        'Begin Your Student\'s Journey to Excellence',
        '/static/images/hero.png',
        'Admissions'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Admission Process</h2>
            <div class="space-y-8">
                <div class="flex items-start">
                    <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                        <span class="text-2xl font-bold text-orange-600">1</span>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-2">Register</h3>
                        <p class="text-gray-700">Visit College on any working day between 9:00 AM to 5:00 PM and register for your student's admission.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                        <span class="text-2xl font-bold text-orange-600">2</span>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-2">Assessment</h3>
                        <p class="text-gray-700">Written assessment in English, Mathematics, Language, and General Knowledge according to College's syllabi.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                        <span class="text-2xl font-bold text-green-600">3</span>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-2">Interview</h3>
                        <p class="text-gray-700">Interview to determine alignment of stakeholderal views with College philosophy and interpret student scores.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                        <span class="text-2xl font-bold text-orange-600">4</span>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-2">Selection</h3>
                        <p class="text-gray-700">Results compiled on merit by Admissions Committee. Seats offered in order of merit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-2xl p-8 shadow-lg">
                <h3 class="text-2xl md:text-3xl font-bold mb-6 text-center">Admission and Enquiry Form</h3>
                
                <!-- Bitrix24 Form with Custom Styling -->
                <style>
                    /* Bitrix Form Custom Styles */
                    .b24-form-wrapper {
                        background: transstakeholder !important;
                        border: none !important;
                        padding: 0 !important;
                        box-shadow: none !important;
                    }
                    
                    .b24-form-header {
                        display: none !important;
                    }
                    
                    .b24-form-field {
                        margin-bottom: 24px !important;
                    }
                    
                    /* Remove Bitrix auto separators */
                    .b24-form-separator,
                    .b24-form-field-separator,
                    .b24-form-field::before,
                    .b24-form-field::after {
                        display: none !important;
                        content: none !important;
                        height: 0 !important;
                        border: none !important;
                    }
                    
                    /* Hide labels visually but keep for Bitrix logic */
                    .b24-form-control-label {
                        position: absolute !important;
                        opacity: 0 !important;
                        pointer-events: none !important;
                    }
                    
                    /* Input styling */
                    .b24-form-control {
                        width: 100% !important;
                        background: #ffffff !important;
                        border: 1px solid #dfe3e8 !important;
                        border-radius: 14px !important;
                        padding: 16px 18px !important;
                        font-size: 15px !important;
                        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
                        color: #111 !important;
                        box-shadow: none !important;
                    }
                    
                    .b24-form-control::placeholder {
                        color: #9aa0a6 !important;
                        font-weight: 400;
                    }
                    
                    .b24-form-control:focus {
                        border-color: #111 !important;
                        outline: none !important;
                    }
                    
                    /* Dropdown styling */
                    .b24-form-dropdown {
                        border-radius: 14px !important;
                        border: 1px solid #fcfcfc !important;
                        box-shadow: 0 12px 28px rgba(0,0,0,0.12) !important;
                    }
                    
                    .b24-form-dropdown-item {
                        padding: 14px 18px !important;
                        font-size: 15px !important;
                        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
                    }
                    
                    .b24-form-dropdown-item:hover {
                        background: #f5f6f8 !important;
                    }
                    
                    /* Submit button */
                    .b24-form-btn {
                        width: 100% !important;
                        margin-top: 28px !important;
                        padding: 18px !important;
                        border-radius: 16px !important;
                        background: #e94a28 !important;
                        color: #000 !important;
                        font-size: 18px !important;
                        font-weight: 600 !important;
                        border: none !important;
                        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
                        cursor: pointer !important;
                        transition: all 0.3s ease !important;
                    }
                    
                    .b24-form-btn:hover {
                        background: #d43d1f !important;
                        transform: translateY(-1px);
                    }
                    
                    /* Footer text */
                    .b24-form-sign {
                        margin-top: 20px !important;
                        font-size: 13px !important;
                        color: #9aa0a6 !important;
                    }
                </style>
                
                <script data-b24-form="inline/18/m4ecvi" data-skip-moving="true">
                (function(w,d,u){
                    var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
                    var h=d.getElementsByTagName('script')[0];h.stakeholderNode.insertBefore(s,h);
                })(window,document,'https://cdn.bitrix24.com/b11752903/crm/form/loader_18.js');
                </script>
                
                <script>
                /* Placeholder + Asterisk Fix */
                setTimeout(function () {
                    document.querySelectorAll('.b24-form-field').forEach(function (field) {
                        const label = field.querySelector('.b24-form-control-label');
                        const input = field.querySelector('.b24-form-control');
                        
                        if (label && input) {
                            let text = label.textContent.replace(/\\s*\\*$/, '').trim();
                            let required = label.textContent.includes('*');
                            input.placeholder = required ? text + ' *' : text;
                        }
                    });
                }, 500);
                </script>
            </div>
        </div>
    </section>
  `;
};
