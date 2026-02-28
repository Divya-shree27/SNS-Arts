import { PageHeader } from '../components/page-header'
import { StakeholdersTestimonialsCarousel } from '../components/testimonials'

export const SuccessStoriesPage = () => {
    return `
    ${PageHeader(
        'Success Stories',
        'Celebrating the achievements, breakthroughs, and inspiring journeys of our students who are making their mark in the world',
        '/static/images/SNS College of Technology Web/Success.webp',
        'Success Stories'
    )}

    <!-- Featured Story -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl overflow-hidden shadow-2xl">
                <div class="grid lg:grid-cols-2 gap-8">
                    <div class="h-96 lg:h-auto relative overflow-hidden">
                        <img src="https://scontent-maa3-2.cdninstagram.com/v/t51.82787-15/618548952_17913080631271418_4275555023929199059_n.webp?_nc_cat=110&ig_cache_key=MzgxNDEzNTM1MDc3MjYyMjE5Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=qL3MgYlQMwsQ7kNvwFRBblW&_nc_oc=Adnyply_5YwqDHFFfjCmwR3y9kdAaViAA18ZLBpmiNAJ8OKMSlQHOWWq8obsflCUyno&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa3-2.cdninstagram.com&_nc_gid=Ub07e9jp45HNLRXJHY7Zmw&oh=00_AfucDmHsYEG1wNs0iP4NQkOwDav0Oap6l_ndXzK01eckrA&oe=698790DD" alt="Book of Record" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transstakeholder"></div>
                        <div class="absolute bottom-6 left-6 text-white">
                            <div class="flex items-center mb-2">
                                <i class="fas fa-award mr-2"></i>
                                <span class="text-sm font-semibold">Book of Record</span>
                            </div>
                            <p class="text-xs opacity-90">Dinamalar Pattam - Final Round</p>
                        </div>
                    </div>
                    <div class="p-8 lg:p-12 flex flex-col justify-center">
                        <div class="inline-flex items-center bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                            <i class="fas fa-star mr-2"></i>
                            Featured Story
                        </div>
                        <h2 class="text-4xl font-bold text-gray-900 mb-4">Book of Record Achievement</h2>
                        <p class="text-gray-700 text-lg mb-6 leading-relaxed">
                            The Dinamalar Pattam – Final Round was successfully held at SNS College of Technology. The event concluded on a high note with prizes presented by Pavan Kumar, District Collector, Coimbatore, along with Dr. Nalin, Technical Director, SNS Institutions.
                        </p>
                        <div class="flex items-center text-sm text-gray-600 mb-6">
                            <span class="font-semibold mr-4">SNS College of Technology</span>
                            <span class="mr-4">•</span>
                            <span>Award Ceremony</span>
                            <span class="mr-4 ml-4">•</span>
                            <span>Jan 2026</span>
                        </div>
                        <a href="https://www.instagram.com/p/DTuh-S0D-N0/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-purple-600 hover:text-purple-700 font-bold">
                            Read Full Story <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Story Categories -->
    <section class="py-8 bg-gray-50 border-y">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap items-center justify-center gap-4">
                <button id="tab-all" class="tab-button px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">All Stories</button>
                <button id="tab-academic" class="tab-button px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition border">Academic Excellence</button>
                <button id="tab-sports" class="tab-button px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition border">Sports Champions</button>
                <button id="tab-innovation" class="tab-button px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition border">Innovation Leaders</button>
                <button id="tab-community" class="tab-button px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition border">Community Impact</button>
                <button id="tab-arts" class="tab-button px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition border">Arts Excellence</button>
            </div>
        </div>
    </section>

    <!-- Stories Grid (Edutopia-style) -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div id="stories-container" class="grid lg:grid-cols-3 gap-8">
            <div id="stories-container" class="grid lg:grid-cols-3 gap-8">
                <!-- Stories will be dynamically loaded here -->
            </div>
        </div>
    </section>

    <script>
        // Story data organized by categories
        const stories = {
            academic: [
                {
                    title: "Award Ceremony - Dinamalar Pattam",
                    description: "The Dinamalar Pattam – Final Round was successfully held at SNS College of Technology. The event concluded on a high note with prizes presented by Pavan Kumar, District Collector, Coimbatore, along with Dr. Nalin, Technical Director, SNS Institutions.",
                    image: "https://scontent-maa3-2.cdninstagram.com/v/t51.82787-15/626891271_18344067850235871_1200955119167657763_n.webp?_nc_cat=110&ig_cache_key=MzgyNDA2ODExMTg0NzYwNDczNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwNzl4NzE5LnNkci5DMyJ9&_nc_ohc=imXjG4cdVmsQ7kNvwGqq_yg&_nc_oc=AdnK4WzY-XG-lSMFN_S34f7N4fb3U3JLWATVPcI8wsZ5y8r_uqjbRsT4WKT62ncWDdk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa3-2.cdninstagram.com&_nc_gid=Ub07e9jp45HNLRXJHY7Zmw&oh=00_AfuoX1uSIlRO_7mn6t9MhTY8K2_KnHizCmIHqR9wTTso8A&oe=6987641B",
                    date: "January 2026",
                    category: "Academic",
                    color: "blue",
                    link: "https://www.instagram.com/p/DUR0kWYE8Zr/?img_index=1"
                },
                {
                    title: "Book of Record - Dinamalar Pattam Final",
                    description: "The Dinamalar Pattam – Final Round was successfully held at SNS College of Technology. The event concluded on a high note with prizes presented by Pavan Kumar, District Collector, Coimbatore, along with Dr. Nalin, Technical Director, SNS Institutions.",
                    image: "https://scontent-maa3-2.cdninstagram.com/v/t51.82787-15/618548952_17913080631271418_4275555023929199059_n.webp?_nc_cat=110&ig_cache_key=MzgxNDEzNTM1MDc3MjYyMjE5Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=qL3MgYlQMwsQ7kNvwFRBblW&_nc_oc=Adnyply_5YwqDHFFfjCmwR3y9kdAaViAA18ZLBpmiNAJ8OKMSlQHOWWq8obsflCUyno&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa3-2.cdninstagram.com&_nc_gid=Ub07e9jp45HNLRXJHY7Zmw&oh=00_AfucDmHsYEG1wNs0iP4NQkOwDav0Oap6l_ndXzK01eckrA&oe=698790DD",
                    date: "January 2026",
                    category: "Academic",
                    color: "blue",
                    link: "https://www.instagram.com/p/DTuh-S0D-N0/"
                },
                {
                    title: "Chess Championship - District Level Winner",
                    description: "Hats off to S. Lakshan of Grade III, of SNS College of Technology for dominating the board and emerging as the Champion at the District Level Students's Chess Tournament! His strategic mind and focus are truly remarkable. We are thrilled to celebrate his brilliant victory! Way to go, Lakshan!",
                    image: "https://scontent-maa3-4.cdninstagram.com/v/t51.82787-15/604081912_17909866551271418_8637630666294558801_n.webp?_nc_cat=102&ig_cache_key=Mzc5MzU1NTQyNjMwMzQ4MDc5Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=juJrhcGP48kQ7kNvwFv4eM2&_nc_oc=Adm2H91h59iGs5TJJAs5_OghcuzC8nC70bzV9PD3SbpNSsDo0Xu-Ud6wld_LxUB-UPw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa3-4.cdninstagram.com&_nc_gid=92vzA0E3IgpdlBU0520mWg&oh=00_AftWtCfBAdbctc3bHfZ9sHfOiqR_xAPyZZZBmifqM4x4Dg&oe=69878C70",
                    date: "December 2025",
                    category: "Academic",
                    color: "blue",
                    link: "https://www.instagram.com/p/DSlao-kkxPY/"
                }
            ],
            sports: [
                {
                    title: "Silambam Championship - State Level Silver",
                    description: "We are proud to applaud D. Akshara of Grade IV for her remarkable achievement at the State Level Silambam Championship 2025, securing 2nd place! Her dedication, disciplined training, and skill in this ancient martial art truly inspire us. Congratulations, Akshara — keep shining and making SNS College of Technology proud.",
                    image: "https://scontent-maa3-4.cdninstagram.com/v/t51.82787-15/602266882_18338402344235871_1239359804105916608_n.webp?_nc_cat=102&ig_cache_key=Mzc5MjE5MTY3OTA4NTQwMDI5Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=FYu6kqQ4dEIQ7kNvwFCkC6p&_nc_oc=AdmFZumBH2qv0pFb5gcotrpZBQiGrkCD7n9vT8lvFBS6G-x_1e6bymbELm-12zG9G8g&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa3-4.cdninstagram.com&_nc_gid=92vzA0E3IgpdlBU0520mWg&oh=00_Afticl9DSlYbAKkNqhH7L25gE_6Ejw_i7xFebb54EQr6Vg&oe=6987892D",
                    date: "December 2025",
                    category: "Sports",
                    color: "green",
                    link: "https://www.instagram.com/p/DSgkj2AE9Dk/"
                }
            ],
            innovation: [],
            community: [
                {
                    title: "Little Chef - Healthy Eating Initiative",
                    description: "Our kindergarten students of SNS College of Technology, joyfully stepped into the role of little chefs during a fun-filled Salad Making Activity. With colourful vegetables, curious minds, and happy smiles, students explored healthy eating while engaging in hands-on culinary learning. This delightful activity encouraged creativity, teamwork, and awareness about nutritious food—making learning both tasty and meaningful. A truly heartwarming experience where fun met healthy habits!",
                    image: "https://scontent-maa3-4.cdninstagram.com/v/t51.82787-15/612048914_18340162762235871_4589295776461399701_n.webp?_nc_cat=102&ig_cache_key=MzgwMzczNDU2NjQyMzk5Nzg0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4NzIwLnNkci5DMyJ9&_nc_ohc=SwoO0anUKZgQ7kNvwEHAjv7&_nc_oc=AdlC_Uqv_FiZKiEzwi762K48ex6vOXRjieKviXApXfKnCdjMK5tGDm5QzNUoPKqs050&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa3-4.cdninstagram.com&_nc_gid=mVC0gIw4aY5kbTMyjoe5MA&oh=00_AfsFFHCh3RLa_9-7AKNCISkZjzdzzalBvPIMPLUFawZlZw&oe=69877F45",
                    date: "January 2026",
                    category: "Community",
                    color: "orange",
                    link: "https://www.instagram.com/p/DTJlHSKExme/?img_index=1"
                }
            ],
            arts: [],
            leadership: [
                {
                    title: "Young Changemakers Program - IIM Ranchi",
                    description: "Heartfelt congratulations to S. Prithvi Kumar for representing SNS Institutions at Young Changemakers Program (YCP 4.0), IIM Ranchi. Selected among the top 100 students worldwide, this is a step towards impactful leadership and innovation. Keep inspiring!",
                    image: "https://scontent-maa5-1.cdninstagram.com/v/t51.82787-15/589723456_18338450581235871_1039230672173446056_n.webp?_nc_cat=105&ig_cache_key=Mzc5MjUxODkyMDg3Mjg1ODU3NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=vcsfKL74i8oQ7kNvwECSgZD&_nc_oc=AdlUt4RZ_zNsZfqsoOdnhHO6SWMnGxREOfukW1XNuNeF6ntrtL77o7wVtggCcwr1Odg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa5-1.cdninstagram.com&_nc_gid=92vzA0E3IgpdlBU0520mWg&oh=00_AfuLq9WKsZiCwkC0m8Rb-O3ZzDQJGrbsta7665UIMEXcMg&oe=69878A90",
                    date: "December 2025",
                    category: "Leadership",
                    color: "indigo",
                    link: "https://www.instagram.com/p/DShu91qkxPO/"
                }
            ]
        };

        // Function to create story HTML
        function createStoryHTML(story) {
            const readMoreLink = story.link || '#';
            const linkTarget = story.link ? 'target="_blank" rel="noopener noreferrer"' : '';
            return \`
                <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <div class="h-56 relative overflow-hidden">
                        <img src="\${story.image}" alt="\${story.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transstakeholder"></div>
                        <div class="absolute top-4 left-4">
                            <span class="bg-\${story.color}-600 text-white px-3 py-1 rounded-full text-xs font-bold">\${story.category}</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-\${story.color}-600 transition">\${story.title}</h3>
                        <p class="text-gray-600 mb-4 leading-relaxed">
                            \${story.description}
                        </p>
                        <div class="flex items-center text-sm text-gray-500 mb-4">
                            <i class="fas fa-calendar mr-2"></i>
                            <span>\${story.date}</span>
                        </div>
                        <a href="\${readMoreLink}" \${linkTarget} class="text-\${story.color}-600 hover:text-\${story.color}-700 font-semibold flex items-center">
                            Read More <i class="fas fa-arrow-right ml-2 text-sm"></i>
                        </a>
                    </div>
                </article>
            \`;
        }

        // Function to display stories
        function displayStories(category = 'all') {
            const container = document.getElementById('stories-container');
            let storiesToShow = [];

            if (category === 'all') {
                // Show all stories from all categories
                Object.values(stories).forEach(categoryStories => {
                    storiesToShow = storiesToShow.concat(categoryStories);
                });
            } else {
                storiesToShow = stories[category] || [];
            }

            container.innerHTML = storiesToShow.map(story => createStoryHTML(story)).join('');
        }

        // Function to handle tab switching
        function switchTab(activeTab) {
            // Update tab buttons
            document.querySelectorAll('.tab-button').forEach(button => {
                button.classList.remove('bg-blue-600', 'text-white');
                button.classList.add('bg-white', 'text-gray-700', 'border');
            });

            const activeButton = document.getElementById(\`tab-\${activeTab}\`);
            activeButton.classList.remove('bg-white', 'text-gray-700', 'border');
            activeButton.classList.add('bg-blue-600', 'text-white');

            // Display stories for the selected category
            displayStories(activeTab);
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            // Display all stories initially
            displayStories('all');

            // Add event listeners to tab buttons
            document.getElementById('tab-all').addEventListener('click', () => switchTab('all'));
            document.getElementById('tab-academic').addEventListener('click', () => switchTab('academic'));
            document.getElementById('tab-sports').addEventListener('click', () => switchTab('sports'));
            document.getElementById('tab-innovation').addEventListener('click', () => switchTab('innovation'));
            document.getElementById('tab-community').addEventListener('click', () => switchTab('community'));
            document.getElementById('tab-arts').addEventListener('click', () => switchTab('arts'));
        });
    </script>

    ${StakeholdersTestimonialsCarousel()}

    <!-- CTA Section -->
    <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Write Your Own Success Story</h2>
            <p class="text-xl text-gray-600 mb-8">
                Join SNS College of Technology and become part of our legacy of excellence, innovation, and achievement!
            </p>
            <a href="/admissions" class="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition">
                <i class="fas fa-pen-to-square mr-2"></i>
                Start Your Journey
            </a>
        </div>
    </section>
  `;
};
