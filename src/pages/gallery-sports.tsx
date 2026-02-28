import { PageHeader } from '../components/page-header'

// Gallery Page with Real Infrastructure
export const GalleryPage = () => {
    return `
    ${PageHeader(
        'Campus Gallery',
        'Explore our world-class infrastructure and vibrant campus life',
        '/static/images/hero5.png',
        'Gallery'
    )}

    <!-- Life at Dr. SNS Rajalakshmi College of Arts and Science -->
    <section class="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-4">Life @ Dr. SNS Rajalakshmi College of Arts and Science</h2>
            <p class="text-center text-xl text-gray-600 mb-12">Where learning meets joy, and every day is an adventure!</p>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div class="bg-white rounded-2xl overflow-hidden shadow-xl card-hover">
                    <div class="h-64 relative overflow-hidden">
                        <img src="/static/images/pre-primary.png" alt="Little Graduates" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transstakeholder"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <i class="fas fa-graduation-cap text-3xl mb-2"></i>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2">Little Graduates</h3>
                        <p class="text-gray-600">Celebrating achievements and milestones of our youngest learners</p>
                    </div>
                </div>
                
                <div class="bg-white rounded-2xl overflow-hidden shadow-xl card-hover">
                    <div class="h-64 relative overflow-hidden">
                        <img src="/static/images/Dr. SNS Rajalakshmi College of Arts and Science Web/Colla Work.png" alt="Collaborative Work" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transstakeholder"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <i class="fas fa-users text-3xl mb-2"></i>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2">Collaborative Work</h3>
                        <p class="text-gray-600">Students working together on innovative projects and problem-solving</p>
                    </div>
                </div>
                
                <div class="bg-white rounded-2xl overflow-hidden shadow-xl card-hover">
                    <div class="h-64 relative overflow-hidden">
                        <img src="/static/images/Dr. SNS Rajalakshmi College of Arts and Science Web/Happy Envirn.png" alt="Happy Environment" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transstakeholder"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <i class="fas fa-smile-beam text-3xl mb-2"></i>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2">Happy Environment</h3>
                        <p class="text-gray-600">Nurturing positive atmosphere where every student thrives</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- College Blocks -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-4">College Campus</h2>
            <p class="text-center text-xl text-gray-600 mb-12">Wi-Fi enabled campus with smart classrooms and modern facilities</p>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-building text-4xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">A Block</h3>
                    <p class="text-gray-700 text-center">Primary academic block with smart classrooms</p>
                </div>
                
                <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-College text-4xl text-purple-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">B Block</h3>
                    <p class="text-gray-700 text-center">Secondary education wing with advanced facilities</p>
                </div>
                
                <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-landmark text-4xl text-green-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">C Block</h3>
                    <p class="text-gray-700 text-center">Senior secondary and administrative block</p>
                </div>
            </div>

            <div class="grid md:grid-cols-4 gap-6">
                <div class="bg-white rounded-xl p-6 shadow-md text-center">
                    <i class="fas fa-door-open text-4xl text-indigo-600 mb-3"></i>
                    <h4 class="font-bold">Reception</h4>
                </div>
                <div class="bg-white rounded-xl p-6 shadow-md text-center">
                    <i class="fas fa-chalkboard text-4xl text-blue-600 mb-3"></i>
                    <h4 class="font-bold">Smart Classrooms</h4>
                </div>
                <div class="bg-white rounded-xl p-6 shadow-md text-center">
                    <i class="fas fa-baby text-4xl text-pink-600 mb-3"></i>
                    <h4 class="font-bold">Pre-KG</h4>
                </div>
                <div class="bg-white rounded-xl p-6 shadow-md text-center">
                    <i class="fas fa-student text-4xl text-purple-600 mb-3"></i>
                    <h4 class="font-bold">LKG & UKG</h4>
                </div>
            </div>
        </div>
    </section>

    <!-- Laboratories -->
    <section class="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">State-of-the-Art Laboratories</h2>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div class="bg-white rounded-2xl p-8 shadow-xl">
                    <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-flask text-3xl text-[#B0CB1F]"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Chemistry Lab</h3>
                    <p class="text-gray-600">Fully-equipped with modern apparatus for hands-on experiments</p>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-xl">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-atom text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Physics Lab</h3>
                    <p class="text-gray-600">Advanced equipment for scientific exploration and discovery</p>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-xl">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-microscope text-3xl text-green-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Biology Lab</h3>
                    <p class="text-gray-600">Complete setup for life sciences and biological studies</p>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-xl">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-laptop-code text-3xl text-purple-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Computer Lab</h3>
                    <p class="text-gray-600">Latest computers with modern software and internet connectivity</p>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-xl">
                    <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-calculator text-3xl text-yellow-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Maths Lab</h3>
                    <p class="text-gray-600">Interactive learning tools for mathematical concepts</p>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-xl">
                    <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-language text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Language Lab</h3>
                    <p class="text-gray-600">Multimedia resources for language skill development</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Other Facilities -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Premium Facilities</h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
                    <i class="fas fa-briefcase text-4xl text-amber-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Board Room</h3>
                    <p class="text-gray-600 text-sm">Professional meeting space for important discussions</p>
                </div>
                
                <div class="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6">
                    <i class="fas fa-utensils text-4xl text-rose-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">VIP Dining</h3>
                    <p class="text-gray-600 text-sm">Premium dining facility for guests and special events</p>
                </div>
                
                <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                    <i class="fas fa-bus text-4xl text-blue-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Transport</h3>
                    <p class="text-gray-600 text-sm">Safe and comfortable College bus service</p>
                </div>
                
                <div class="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6">
                    <i class="fas fa-video text-4xl text-[#B0CB1F] mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">CCTV Security</h3>
                    <p class="text-gray-600 text-sm">24/7 monitoring for student safety</p>
                </div>
                
                <div class="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6">
                    <i class="fas fa-solar-panel text-4xl text-yellow-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Solar Powered</h3>
                    <p class="text-gray-600 text-sm">Eco-friendly campus with solar energy</p>
                </div>
                
                <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                    <i class="fas fa-wifi text-4xl text-purple-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Wi-Fi Enabled</h3>
                    <p class="text-gray-600 text-sm">Complete campus connectivity</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Executive Lounge -->
    <section class="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-4">SLUSH - Executive Lounge</h2>
            <p class="text-center text-xl text-gray-600 mb-12">Premium space for top-performing students</p>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
                    <i class="fas fa-gamepad text-6xl text-indigo-600 mb-6"></i>
                    <h3 class="text-2xl font-bold mb-4">Video Gaming</h3>
                    <p class="text-gray-600">Latest gaming consoles and equipment</p>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
                    <i class="fas fa-star text-6xl text-yellow-500 mb-6"></i>
                    <h3 class="text-2xl font-bold mb-4">Awe Inspiring</h3>
                    <p class="text-gray-600">Motivational and inspiring environment</p>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
                    <i class="fas fa-film text-6xl text-pink-600 mb-6"></i>
                    <h3 class="text-2xl font-bold mb-4">Entertainment</h3>
                    <p class="text-gray-600">Movies, music, and recreational activities</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Play Area -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-4">Happy Trails - Play Area</h2>
            <p class="text-center text-xl text-gray-600 mb-12">Where imagination comes to life!</p>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-gradient-to-br from-pink-100 to-red-100 rounded-xl p-6 text-center">
                    <i class="fas fa-home text-5xl text-pink-600 mb-4"></i>
                    <h3 class="font-bold text-lg">Play Houses</h3>
                </div>
                
                <div class="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-6 text-center">
                    <i class="fas fa-water text-5xl text-blue-600 mb-4"></i>
                    <h3 class="font-bold text-lg">Aquatics</h3>
                </div>
                
                <div class="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 text-center">
                    <i class="fas fa-puzzle-piece text-5xl text-green-600 mb-4"></i>
                    <h3 class="font-bold text-lg">Mazes</h3>
                </div>
                
                <div class="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl p-6 text-center">
                    <i class="fas fa-tree text-5xl text-purple-600 mb-4"></i>
                    <h3 class="font-bold text-lg">Jungle Gym</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-4">Experience Our Campus</h2>
            <p class="text-xl mb-8">Schedule a visit to see our world-class infrastructure in person!</p>
            <a href="/contact" class="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition inline-block">
                <i class="fas fa-calendar-check mr-2"></i>
                Book Campus Tour
            </a>
        </div>
    </section>
  `;
};

// Sports & Clubs Page
export const SportsClubsPage = () => {
    return `
    ${PageHeader(
        'Sports & Clubs',
        'Building champions in sports, arts, and life skills',
        '/static/images/gym.jpg',
        'Sports & Clubs'
    )}

    <!-- Sports for Life -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-4">Sports For Life</h2>
            <p class="text-center text-xl text-gray-600 mb-12">
                Well-developed play fields with specialized physical instructors to bring out the best in every student
            </p>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-futbol text-4xl text-green-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Football</h3>
                    <p class="text-gray-600 text-center">Full-sized field with professional coaching</p>
                </div>
                
                <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-table-tennis text-4xl text-yellow-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Tennis & TT</h3>
                    <p class="text-gray-600 text-center">Professional tennis court and table tennis facility</p>
                </div>
                
                <div class="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-baseball-ball text-4xl text-[#B0CB1F]"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Cricket</h3>
                    <p class="text-gray-600 text-center">All-weather indoor cricket center with nets</p>
                </div>
                
                <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-basketball-ball text-4xl text-orange-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Basketball</h3>
                    <p class="text-gray-600 text-center">Full court with modern equipment</p>
                </div>
                
                <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-volleyball-ball text-4xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Volleyball</h3>
                    <p class="text-gray-600 text-center">Indoor and outdoor courts available</p>
                </div>
                
                <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-running text-4xl text-purple-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Athletics</h3>
                    <p class="text-gray-600 text-center">Track events and field sports training</p>
                </div>
                
                <div class="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-swimmer text-4xl text-teal-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Swimming</h3>
                    <p class="text-gray-600 text-center">Ozonized pool with trained coaches</p>
                </div>
                
                <div class="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-dumbbell text-4xl text-pink-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Gym & Fitness</h3>
                    <p class="text-gray-600 text-center">Modern equipment with fitness trainers</p>
                </div>
                
                <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-medal text-4xl text-amber-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Kabaddi & Kho-Kho</h3>
                    <p class="text-gray-600 text-center">Traditional Indian sports training</p>
                </div>
            </div>

            <div class="bg-green-50 rounded-2xl p-8">
                <h3 class="text-2xl font-bold text-center mb-6">Scouts & Guides</h3>
                <div class="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                        <i class="fas fa-campground text-4xl text-green-600 mb-4"></i>
                        <h4 class="font-bold mb-2">Outdoor Activities</h4>
                        <p class="text-sm text-gray-600">Camping, hiking, and nature exploration</p>
                    </div>
                    <div>
                        <i class="fas fa-hands-helping text-4xl text-blue-600 mb-4"></i>
                        <h4 class="font-bold mb-2">Community Service</h4>
                        <p class="text-sm text-gray-600">Social responsibility and leadership</p>
                    </div>
                    <div>
                        <i class="fas fa-certificate text-4xl text-purple-600 mb-4"></i>
                        <h4 class="font-bold mb-2">Skill Development</h4>
                        <p class="text-sm text-gray-600">Badges, certifications, and achievements</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Clubs & Activities -->
    <section class="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-4">Clubs & Activities</h2>
            <p class="text-center text-xl text-gray-600 mb-12">
                25+ extra-curricular options for holistic development
            </p>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-music text-5xl text-purple-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Music Club</h3>
                    <p class="text-sm text-gray-600">Vocal & instrumental training</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-theater-masks text-5xl text-pink-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Dance Club</h3>
                    <p class="text-sm text-gray-600">Classical, western, and folk forms</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-palette text-5xl text-yellow-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Art Club</h3>
                    <p class="text-sm text-gray-600">Painting, drawing, and crafts</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-drama text-5xl text-[#B0CB1F] mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Drama Club</h3>
                    <p class="text-sm text-gray-600">Theater and public speaking</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-robot text-5xl text-blue-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Robotics Club</h3>
                    <p class="text-sm text-gray-600">STEM and innovation projects</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-chess text-5xl text-gray-700 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Chess Club</h3>
                    <p class="text-sm text-gray-600">Strategic thinking and tournaments</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-book-reader text-5xl text-green-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Literary Club</h3>
                    <p class="text-sm text-gray-600">Reading, writing, and debates</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-flask text-5xl text-orange-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Science Club</h3>
                    <p class="text-sm text-gray-600">Experiments and exhibitions</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-leaf text-5xl text-green-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Eco Club</h3>
                    <p class="text-sm text-gray-600">Environmental awareness activities</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-language text-5xl text-indigo-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Language Club</h3>
                    <p class="text-sm text-gray-600">Hindi, Tamil, French learning</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-camera text-5xl text-purple-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Photography Club</h3>
                    <p class="text-sm text-gray-600">Visual arts and documentation</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-users text-5xl text-blue-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Student Council</h3>
                    <p class="text-sm text-gray-600">Leadership and governance</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-microphone-alt text-5xl text-[#B0CB1F] mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Toastmasters Club</h3>
                    <p class="text-sm text-gray-600">Public speaking & leadership skills</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-globe-americas text-5xl text-teal-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Model United Nations</h3>
                    <p class="text-sm text-gray-600">Diplomacy, debate & global issues</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-4">Discover Your Passion</h2>
            <p class="text-xl mb-8">Join our sports teams and clubs to unlock your potential!</p>
            <a href="/admissions" class="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition inline-block">
                <i class="fas fa-trophy mr-2"></i>
                Join Dr. SNS Rajalakshmi College of Arts and Science
            </a>
        </div>
    </section>
  `;
};

// Brochure Page
export const BrochurePage = () => {
    return `
    ${PageHeader(
        'Digital Brochure',
        'Download our complete prospectus and learn more about Dr. SNS Rajalakshmi College of Arts and Science',
        '/static/images/hero.png',
        'Brochure'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 text-center shadow-xl">
                <i class="fas fa-file-pdf text-8xl text-[#B0CB1F] mb-8"></i>
                <h2 class="text-4xl font-bold mb-4">Dr. SNS Rajalakshmi College of Arts and Science Prospectus</h2>
                <p class="text-xl text-gray-700 mb-8">
                    Comprehensive guide with complete information about our programs, facilities, admission process, and fees structure.
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <a href="https://snsacademy.org/brochure/" target="_blank" class="bg-[#B0CB1F] hover:bg-[#91A61A] text-white px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center">
                        <i class="fas fa-download mr-2"></i>
                        Download Brochure
                    </a>
                    <a href="https://snsacademy.org/brochure/" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center">
                        <i class="fas fa-external-link-alt mr-2"></i>
                        View Online
                    </a>
                </div>
                
                <p class="text-sm text-gray-600">
                    For printed copies, contact us at <a href="tel:+919629937861" class="text-blue-600 hover:underline">+91 96299 37861</a>
                </p>
            </div>
            
            <div class="mt-12 grid md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-graduation-cap text-3xl text-purple-600"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2">Academic Programs</h3>
                    <p class="text-sm text-gray-600">Undergraduate to Post Graduate Programs curriculum details</p>
                </div>
                
                <div class="text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-building text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2">Facilities Tour</h3>
                    <p class="text-sm text-gray-600">Complete infrastructure overview</p>
                </div>
                
                <div class="text-center">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-rupee-sign text-3xl text-green-600"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2">Fee Structure</h3>
                    <p class="text-sm text-gray-600">Transstakeholder pricing and payment options</p>
                </div>
            </div>
        </div>
    </section>
  `;
};
