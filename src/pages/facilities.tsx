import { PageHeader } from '../components/page-header'

export const FacilitiesPage = () => {
    return `
    ${PageHeader(
        'World-Class Infrastructure', 
        'Everything your student needs for holistic development under one roof—unlocking their potential at the SPINE Activity Center', 
        '/static/images/hero5.png',
        'Facilities'
    )}

    <!-- SPINE Center -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Student Life</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-6">SNS SPINE Activity Center</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    A 5-level world-class activity center for sports, arts, entertainment, and wellness. 
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Swimming Pool -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS College of Technology Web/Swim.png" alt="Swimming Pool" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Swimming Pool</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Professional-grade swimming pool with trained coaches. Swimming regularly lowers stress, reduces anxiety, and builds physical endurance.
                        </p>
                    </div>
                </div>

                <!-- Cricket Center -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS College of Technology Web/Indoor.png" alt="Indoor Cricket Center" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Indoor Cricket</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            All-weather cricket pitch with bowling machines and nets. Professional coaching available for all skill levels, day or night.
                        </p>
                    </div>
                </div>

                <!-- Fitness Center -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS College of Technology Web/Fitness.png" alt="Fitness Center" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Fitness Center</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Fully-equipped gym with treadmills, strength machines, weights, and boxing kits to ensure students stay healthy and toned.
                        </p>
                    </div>
                </div>

                <!-- Music Studio -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS College of Technology Web/Music.png" alt="Music Studio" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Music Studio</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Professional music studio with recording equipment and instruments. A space for students to compose, practice, and create.
                        </p>
                    </div>
                </div>

                <!-- Dance Studio -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS College of Technology Web/Dance.png" alt="Beats Dance Studio" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Dance Studio</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Dedicated space for various dance styles—from classical to contemporary. Enriching life through movement and expression.
                        </p>
                    </div>
                </div>

                <!-- Art Room -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS College of Technology Web/Art Studio.png" alt="Art Room" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Art Studio</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Creative space for drawing, painting, and sculpting. Allowing students to visualize concepts and express emotions.
                        </p>
                    </div>
                </div>

                <!-- Theater -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS College of Technology Web/The.png" alt="Bioskop Theater" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Bioskop Theater</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Compact digital theater with superior sound and projection. A unique venue for educational films and entertainment.
                        </p>
                    </div>
                </div>

                <!-- Gaming Arena -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS College of Technology Web/Gaming Area.png" alt="Gaming Arena" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Gaming Arena</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            State-of-the-art gaming space for recreational and competitive esports, fostering strategic thinking and teamwork.
                        </p>
                    </div>
                </div>

                <!-- Rooftop Restaurant -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS College of Technology Web/TopRoof Dinning.png" alt="Rooftop Restaurant" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Rooftop Dining</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Fine dining experience with healthy, seasonal meals. A perfect setting for community interaction and relaxation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Academic Facilities -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                 <h2 class="text-4xl font-bold text-gray-900 mb-6">Academic Infrastructure</h2>
                 <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Modern learning spaces designed to foster innovation and collaboration.
                 </p>
            </div>
            
            <div class="grid md:grid-cols-4 gap-8">
                <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-chalkboard-teacher text-3xl text-purple-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Smart Classrooms</h3>
                    <p class="text-sm text-gray-600">Interactive learning with smart boards</p>
                </div>
                <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-flask text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Science Labs</h3>
                    <p class="text-sm text-gray-600">Physics, Chemistry & Biology labs</p>
                </div>
                <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-desktop text-3xl text-green-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Computer Labs</h3>
                    <p class="text-sm text-gray-600">State-of-the-art computing facilities</p>
                </div>
                <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                    <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-book text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Library</h3>
                    <p class="text-sm text-gray-600">Comprehensive resource collection</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-pink-600 to-orange-600 text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">Experience It In Person</h2>
            <p class="text-xl lg:text-2xl mb-10 text-white/90 font-light">
                Words and pictures can only say so much. Schedule a visit to see our world-class campus.
            </p>
            <a href="/contact" class="bg-white text-pink-600 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-xl shadow-xl transition transform hover:scale-105 inline-block">
                Schedule Campus Tour
            </a>
        </div>
    </section>
  `;
};
