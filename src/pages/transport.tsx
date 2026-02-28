import { PageHeader } from '../components/page-header'

// Transport Page with Bus Routes and Coverage
export const TransportPage = () => {
    return `
    ${PageHeader(
        'College Transport Services',
        'Safe, comfortable, and punctual transportation for your student',
        '/static/images/SNS_BUS.jpg',
        'Transport'
    )}

    <!-- Key Features -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">Why Stakeholders Trust Our Transport</h2>
                <p class="text-xl text-gray-600">Fleet of 20 buses covering major areas of Coimbatore</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <i class="fas fa-bus text-4xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">20 Buses</h3>
                    <p class="text-gray-600">Full fleet of air-conditioned buses</p>
                </div>
                
                <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <i class="fas fa-map-marked-alt text-4xl text-green-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">GPS Tracking</h3>
                    <p class="text-gray-600">Real-time location monitoring</p>
                </div>
                
                <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 text-center card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <i class="fas fa-shield-alt text-4xl text-purple-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">RFID Cards</h3>
                    <p class="text-gray-600">Safe boarding system</p>
                </div>
                
                <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <i class="fas fa-snowflake text-4xl text-orange-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">Air Conditioned</h3>
                    <p class="text-gray-600">All buses fully AC</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Bus Route Coverage -->
    <section class="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">Bus Route Coverage Areas</h2>
                <p class="text-xl text-gray-600 mb-2">We cover major areas across Coimbatore</p>
                <p class="text-lg text-orange-600 font-semibold">🚨 Check if your area is covered before admission!</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 mb-12">
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 class="text-2xl font-bold mb-6 text-blue-600 flex items-center">
                        <i class="fas fa-map-marker-alt mr-3"></i>
                        Central Coimbatore
                    </h3>
                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>RS Puram</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Race Course</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Town Hall</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Gandhipuram</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Saibaba Colony</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 class="text-2xl font-bold mb-6 text-purple-600 flex items-center">
                        <i class="fas fa-map-marker-alt mr-3"></i>
                        East Coimbatore
                    </h3>
                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Peelamedu</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Hopes College</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Singanallur</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Ramanathapuram</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Ganapathy</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 class="text-2xl font-bold mb-6 text-green-600 flex items-center">
                        <i class="fas fa-map-marker-alt mr-3"></i>
                        West & South
                    </h3>
                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Vadavalli</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Thudiyalur</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Podanur</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Ukkadam</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Kuniyamuthur</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Check Your Area CTA -->
            <div class="bg-gradient-to-r from-orange-500 to-[#B0CB1F] rounded-2xl p-8 text-white text-center">
                <i class="fas fa-exclamation-circle text-5xl mb-4"></i>
                <h3 class="text-3xl font-bold mb-4">Not Sure If Your Area Is Covered?</h3>
                <p class="text-xl mb-6">Contact our transport coordinator to check route availability for your specific location</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+914224390470" class="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center">
                        <i class="fas fa-phone mr-2"></i>
                        Call: +91 96299 37861
                    </a>
                    <a href="/contact" class="bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center">
                        <i class="fas fa-envelope mr-2"></i>
                        Send Inquiry
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Safety Features -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Safety Features</h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                    <i class="fas fa-tachometer-alt text-4xl text-[#B0CB1F] mb-4"></i>
                    <h3 class="text-xl font-bold mb-3">Speed Governor</h3>
                    <p class="text-gray-600">All buses fitted with speed limiters for safety</p>
                </div>
                
                <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                    <i class="fas fa-satellite-dish text-4xl text-blue-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-3">GPS Tracking</h3>
                    <p class="text-gray-600">Real-time location monitoring system</p>
                </div>
                
                <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                    <i class="fas fa-id-card text-4xl text-purple-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-3">RFID System</h3>
                    <p class="text-gray-600">Smart cards for secure boarding</p>
                </div>
                
                <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                    <i class="fas fa-first-aid text-4xl text-green-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-3">First Aid Box</h3>
                    <p class="text-gray-600">Fully equipped medical kit in every bus</p>
                </div>
                
                <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                    <i class="fas fa-user-shield text-4xl text-yellow-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-3">Trained Staff</h3>
                    <p class="text-gray-600">Caretakers on every bus for student safety</p>
                </div>
                
                <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                    <i class="fas fa-video text-4xl text-indigo-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-3">CCTV Cameras</h3>
                    <p class="text-gray-600">Video surveillance for complete security</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Transport Rules -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-4">Transport Guidelines</h2>
            <p class="text-center text-xl text-gray-600 mb-12">Important information for stakeholders</p>
            
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 class="text-2xl font-bold mb-6 text-blue-600">For Stakeholders</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-clock text-blue-600 mt-1 mr-3"></i>
                            <div>
                                <strong>Punctuality:</strong> Students must report 5 minutes before bus arrival
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-user-check text-blue-600 mt-1 mr-3"></i>
                            <div>
                                <strong>Pick-up (Undergraduate-VII):</strong> Stakeholders must receive student at bus stop
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-calendar-alt text-blue-600 mt-1 mr-3"></i>
                            <div>
                                <strong>Changes:</strong> Route/stop changes require 1 month advance notice
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-envelope text-blue-600 mt-1 mr-3"></i>
                            <div>
                                <strong>Communication:</strong> All requests via official email only
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 class="text-2xl font-bold mb-6 text-purple-600">For Students</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-user-tie text-purple-600 mt-1 mr-3"></i>
                            <div>
                                <strong>Uniform:</strong> Proper College uniform mandatory
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-id-badge text-purple-600 mt-1 mr-3"></i>
                            <div>
                                <strong>ID Card:</strong> College ID with bus number required
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-ban text-purple-600 mt-1 mr-3"></i>
                            <div>
                                <strong>Prohibited:</strong> Eating, drinking, or games in bus
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-users text-purple-600 mt-1 mr-3"></i>
                            <div>
                                <strong>Behavior:</strong> Maintain discipline; misbehavior may cancel service
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Schedule Information -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-12 text-center">
                <i class="fas fa-clock text-6xl text-blue-600 mb-6"></i>
                <h2 class="text-4xl font-bold mb-4">College Timings</h2>
                <p class="text-xl text-gray-700 mb-6">
                    Buses are scheduled to ensure students arrive by <strong class="text-blue-600">8:15 AM</strong> daily
                </p>
                <p class="text-gray-600 mb-8">
                    Routes are designed to minimize transit time and provide comfortable journeys
                </p>
                <a href="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center">
                    <i class="fas fa-info-circle mr-2"></i>
                    Get Route Schedule
                </a>
            </div>
        </div>
    </section>

    <!-- Contact for Transport -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-4">Need Transport Information?</h2>
            <p class="text-xl mb-8">
                Contact our transport coordinator for route details, availability, and fees
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+914224390470" class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center">
                    <i class="fas fa-phone mr-2"></i>
                    +91 96299 37861
                </a>
                <a href="mailto:info@snsacademy.org" class="bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center">
                    <i class="fas fa-envelope mr-2"></i>
                    info@snsacademy.org
                </a>
            </div>
        </div>
    </section>
  `;
};
