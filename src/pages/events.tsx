import { PageHeader } from '../components/page-header'

export const EventsPage = () => {
    return `
    ${PageHeader(
        'Events & Celebrations',
        'Experience the vibrant life at Dr. SNS Rajalakshmi College of Arts and Science through our memorable events, celebrations, and activities',
        '/static/images/Dr. SNS Rajalakshmi College of Arts and Science Web/Events.webp',
        'Events'
    )}

    <!-- Instagram-Style Gallery -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Gallery Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <!-- Event 1: Pongal Celebration -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://scontent-maa5-1.cdninstagram.com/v/t51.82787-15/615988042_18341067322235871_4506448674383653617_n.webp?_nc_cat=106&ig_cache_key=MzgxMDI1ODMyOTE2ODcyOTA5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=xNNLWsTZ02YQ7kNvwEu3a_8&_nc_oc=AdnE2Jz4idXUR2xLd8Sv7r4-oDwxPYO34herU5UHNpe3mpxkaWXXhvvY0meI3mu_4Uc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa5-1.cdninstagram.com&_nc_gid=TxLpu_55NmXdHJ4GP2aRpQ&oh=00_AfvhXQWUUMuamrG7McrkuhqOzxceK1YUqduf40lVqACcDA&oe=69876BAB" alt="Pongal Celebration" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transstakeholder"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Pongal Celebration</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transstakeholder opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Pongal Celebration</h3>
                            <p class="text-white/90 text-sm mb-3">உங்கள் இல்லங்களிலும் மகிழ்ச்சியும், மனங்களில் நன்றியுணர்வும், வாழ்வில் வளமும் நிறையட்டும். பாரம்பரியமும் பண்பாடும் போற்றப்படும் இந்த நன்னாளில், புதிய நம்பிக்கைகளும் நல்ல தொடக்கங்களும் மலரட்டும். SNS கல்வி நிறுவனங்கள் சார்பாக இனிய பொங்கல் திருநாள் நல்வாழ்த்துகள்!</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> Jan 2026</span>
                                <span><i class="fas fa-star mr-1"></i> Festival</span>
                            </div>
                            <a href="https://www.instagram.com/p/DTgwcNEk1QH/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">Festival</span>
                    </div>
                </div>

                <!-- Event 2: Green Day Celebration -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://scontent-maa5-1.cdninstagram.com/v/t51.82787-15/611728039_17911953312271418_5225745699396843246_n.webp?_nc_cat=106&ig_cache_key=MzgwNjY5MDI0MTg3NzYzNTY4NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4NzIwLnNkci5DMyJ9&_nc_ohc=xGaUyz2YMlwQ7kNvwHR9QsT&_nc_oc=Adm3ek1R3q64eopEjFdURx7ZSsSdUSz8b7nqM1IBToWDI0XL-k0mq54F5hiIKmodbZk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa5-1.cdninstagram.com&_nc_gid=eBHSSBXLsiP3Fka5gDdNAw&oh=00_AftD9HwAS4fNAE1LcVxurYxSvIeqdzrO4_IwQuyUxZL1QQ&oe=698757F0" alt="Green Day Celebration" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transstakeholder"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Green Day Celebration</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transstakeholder opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Green Day Celebration</h3>
                            <p class="text-white/90 text-sm mb-3">Our little learners of Dr. SNS Rajalakshmi College of Arts and Science had stepped out of their classrooms and into nature as part of Green Day celebrations. Taken to the lush lawn areas, students were introduced to the importance of greenery, plants, and caring for our environment. A beautiful day filled with curiosity, smiles, and meaningful lessons—planting the seeds of environmental responsibility from an early age.</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> Jan 2026</span>
                                <span><i class="fas fa-leaf mr-1"></i> Environment</span>
                            </div>
                            <a href="https://www.instagram.com/p/DTUFJ3ID1Ys/?img_index=1" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">Environment</span>
                    </div>
                </div>

                <!-- Event 3: Little Chef -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://scontent-maa3-4.cdninstagram.com/v/t51.82787-15/612048914_18340162762235871_4589295776461399701_n.webp?_nc_cat=102&ig_cache_key=MzgwMzczNDU2NjQyMzk5Nzg0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4NzIwLnNkci5DMyJ9&_nc_ohc=SwoO0anUKZgQ7kNvwEHAjv7&_nc_oc=AdlC_Uqv_FiZKiEzwi762K48ex6vOXRjieKviXApXfKnCdjMK5tGDm5QzNUoPKqs050&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa3-4.cdninstagram.com&_nc_gid=mVC0gIw4aY5kbTMyjoe5MA&oh=00_AfsFFHCh3RLa_9-7AKNCISkZjzdzzalBvPIMPLUFawZlZw&oe=69877F45" alt="Little Chef Activity" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transstakeholder"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Little Chef</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transstakeholder opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Little Chef</h3>
                            <p class="text-white/90 text-sm mb-3">Our kindergarten students of Dr. SNS Rajalakshmi College of Arts and Science, joyfully stepped into the role of little chefs during a fun-filled Salad Making Activity. With colourful vegetables, curious minds, and happy smiles, students explored healthy eating while engaging in hands-on culinary learning. This delightful activity encouraged creativity, teamwork, and awareness about nutritious food—making learning both tasty and meaningful!</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> Jan 2026</span>
                                <span><i class="fas fa-utensils mr-1"></i> Kindergarten</span>
                            </div>
                            <a href="https://www.instagram.com/p/DTJlHSKExme/?img_index=1" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold">Activity</span>
                    </div>
                </div>

                <!-- Event 4: Happy New Year -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://scontent-maa5-2.cdninstagram.com/v/t51.82787-15/608763132_18339603499235871_232124846933807831_n.webp?_nc_cat=108&ig_cache_key=MzgwMDA2NTYxNjY0MTIwNDg3OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=MgP7BhFMCiEQ7kNvwHjUq7Q&_nc_oc=AdmWZQS89EIXg4arDrqUqPWAZfcKsOg6359mmUheylwKnCOOqe2kAw9iX47C9oOvU24&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa5-2.cdninstagram.com&_nc_gid=eBHSSBXLsiP3Fka5gDdNAw&oh=00_Afs6gR-NS9dM3eqL5tlIEmNMw8QouFbpeUUehiraw8mwog&oe=6987788F" alt="Happy New Year" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transstakeholder"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Happy New Year</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transstakeholder opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Happy New Year</h3>
                            <p class="text-white/90 text-sm mb-3">Happy New Year from SNS Institutions! "Empowering Minds. Shaping Futures. Welcome to New Beginnings." Wishing everyone a year filled with growth, excellence, and positivity.</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> Jan 2026</span>
                                <span><i class="fas fa-star mr-1"></i> Celebration</span>
                            </div>
                            <a href="https://www.instagram.com/p/DS8i4tzEyKO/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">Celebration</span>
                    </div>
                </div>

                <!-- Event 5: Christmas Celebration -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://scontent-maa3-1.cdninstagram.com/v/t51.82787-15/605713373_18338808703235871_6262506903073291867_n.webp?_nc_cat=101&ig_cache_key=Mzc5NTAwMDEzNzUyMjI5NzU5MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=tPHRHvy0ZdUQ7kNvwHjYL5H&_nc_oc=AdkEZVRvbsnFllt4znon8-m4kjJAC9kjtUcNBQLLjfFY3MmN97bGj2ljTjTqO3lX0_M&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa3-1.cdninstagram.com&_nc_gid=SMeZyFwDQ6zdYvow83ynIw&oh=00_Afsxm20KSAvu0pQGczXsW754UTbufIywSaXeeuI4EqSvSg&oe=6987ADA1" alt="Christmas Celebration" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transstakeholder"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Christmas Celebration</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transstakeholder opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Christmas Celebration</h3>
                            <p class="text-white/90 text-sm mb-3">May this festive season fill your hearts with joy, peace, and goodwill. Wishing everyone a Christmas filled with love, happiness, and new beginnings. Warm Christmas wishes from SNS Institutions!!!</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> Dec 2025</span>
                                <span><i class="fas fa-gift mr-1"></i> Festival</span>
                            </div>
                            <a href="https://www.instagram.com/p/DSqjISvkzr3/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-[#B0CB1F] text-white px-3 py-1 rounded-full text-xs font-bold">Festival</span>
                    </div>
                </div>

                <!-- Event 6: Educational Tour -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://scontent-maa5-2.cdninstagram.com/v/t51.82787-15/600926622_18338297017235871_4661934839550693_n.webp?_nc_cat=108&ig_cache_key=Mzc5MTQ0MDEwMzUyOTk3OTM2MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwNzl4NzE5LnNkci5DMyJ9&_nc_ohc=hj6nIL29W-gQ7kNvwH6fa6p&_nc_oc=Adn2izmgrMj0wJvaoenoDA4Z8oVyZEYWScjV9qu9RYkMwMa4dymbXpg6j5aqtsYdwus&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa5-2.cdninstagram.com&_nc_gid=SMeZyFwDQ6zdYvow83ynIw&oh=00_AftllX9COVfNADSiq96pbuZ3I7MCjUEczOw5dRbT4Vt8Nw&oe=6987A25D" alt="Educational Tour" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transstakeholder"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Educational Tour</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transstakeholder opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Educational Tour</h3>
                            <p class="text-white/90 text-sm mb-3">Our Mid Wing students of Dr. SNS Rajalakshmi College of Arts and Science enjoyed an enriching educational tour to Thekkady, where learning met nature and adventure. From exploring the Periyar Wildlife Sanctuary to understanding biodiversity and conservation firsthand, the experience went beyond textbooks. Filled with teamwork, joy, and unforgettable memories!</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> Dec 2025</span>
                                <span><i class="fas fa-hiking mr-1"></i> Thekkady</span>
                            </div>
                            <a href="https://www.instagram.com/p/DSd5rGBEwpi/?img_index=1" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">Educational Tour</span>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Be Part of Our Vibrant Community</h2>
            <p class="text-xl text-gray-600 mb-8">
                Join Dr. SNS Rajalakshmi College of Arts and Science and create unforgettable memories through our diverse events and celebrations!
            </p>
            <a href="/admissions" class="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition">
                <i class="fas fa-pen-to-square mr-2"></i>
                Apply for Admission
            </a>
        </div>
    </section>
  `;
};
