import re

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # The 3 cards section I added previously
    cards_section_pattern = r'    <!-- Student Learner Profile -->.*?</section>'
    
    # Let's completely remove my previously added cards_section 
    content = re.sub(cards_section_pattern, '', content, flags=re.DOTALL)

    # I will construct the original Building the Future section + the new cards section
    building_the_future = """    <!-- Program Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                     <span class="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Building Stage</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Building The Future</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        Middle College focus on the Building Stage, where students master the design thinking framework and begin applying it to real-world challenges. This critical phase prepares students for advanced academic pursuits and develops entrepreneurial mindsets.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        Our curriculum combines rigorous NAAC A++ academics with hands-on projects, critical reasoning, and collaborative problem-solving, ensuring students develop both knowledge and practical skills.
                    </p>
                </div>
                <div class="bg-blue-50 rounded-3xl p-10">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Key Focus Areas</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-blue-700 text-xs"></i></div>
                            <span class="text-gray-700">Design Thinking Framework Mastery</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-blue-700 text-xs"></i></div>
                            <span class="text-gray-700">Critical Thinking & Problem Solving</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-blue-700 text-xs"></i></div>
                            <span class="text-gray-700">Real-World Projects</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-blue-700 text-xs"></i></div>
                            <span class="text-gray-700">Team Collaboration & Communication</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Student Learner Profile -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Middle College Learner Profile</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">A progressive journey from guided learning to independent thinking and leadership.</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 text-left">
                <!-- Semester 3 -->
                <div class="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition duration-300 border-t-4 border-blue-500">
                    <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600 text-2xl font-bold font-sans">6</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Semester 3 Learners</h3>
                    <p class="text-blue-600 font-semibold mb-4">Transitioning to independent thinkers</p>
                    <p class="text-gray-700 mb-6 text-sm leading-relaxed">Semester 3 supports students as they move from guided learning to greater independence, building confidence and responsibility within the Academic Framework.</p>
                    <ul class="space-y-3 text-sm text-gray-700">
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">⭐</span> Growing independence and responsibility</li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🧠</span> Critical-thinking and problem-solving skills</li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">💬</span> Confidence to express ideas and ask questions</li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">📘</span> Adaptation to structured academic learning</li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">⏱️</span> Development of study habits and self-discipline</li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🤝</span> Active classroom participation</li>
                    </ul>
                </div>

                <!-- Grade 7 -->
                <div class="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition duration-300 border-t-4 border-purple-500">
                    <div class="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-600 text-2xl font-bold font-sans">7</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Grade 7 Learners</h3>
                    <p class="text-purple-600 font-semibold mb-4">From curiosity to conceptual understanding</p>
                    <p class="text-gray-700 mb-6 text-sm leading-relaxed">Grade 7 encourages deeper learning through concept-based and experiential approaches, helping students connect ideas beyond textbooks.</p>
                    <ul class="space-y-3 text-sm text-gray-700">
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🧠</span> Enhanced analytical and logical reasoning</li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🔍</span> Inquiry-based and experiential learning</li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">💬</span> Improved communication and collaboration</li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">📊</span> Learning through projects and real-life applications</li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🎨</span> Creativity, teamwork, and value-based learning</li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🚀</span> Growing academic confidence</li>
                    </ul>
                </div>

                <!-- Grade 8 -->
                <div class="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition duration-300 border-t-4 border-orange-500">
                    <div class="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-orange-600 text-2xl font-bold font-sans">8</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Grade 8 Learners</h3>
                    <p class="text-orange-600 font-semibold mb-4">Building responsibility and leadership</p>
                    <p class="text-gray-700 mb-6 text-sm leading-relaxed">Grade 8 prepares students for higher academic challenges while nurturing leadership, accountability, and personal growth.</p>
                    <ul class="space-y-3 text-sm text-gray-700">
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🎯</span> Strong academic focus and accountability</li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">⏱️</span> Independent learning and time management</li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">⭐</span> Leadership and decision-making skills</li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🧠</span> Emotional and social maturity</li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🏛️</span> Leadership roles through clubs and activities</li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🤝</span> Responsible participation in College community</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>"""
    
    # Insert building_the_future where it belongs: after the first section (hero section ending with </section>)
    
    # We will search for <!-- Design Thinking Framework Grid --> and insert everything before it.
    # Wait, my previous code replaced <!-- Program Overview --> section.
    # We can just look for <!-- Design Thinking Framework Grid -->, and put our building_the_future string BEFORE it.
    content = re.sub(r'<!-- Design Thinking Framework Grid -->', building_the_future + '\n\n    <!-- Design Thinking Framework Grid -->', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filepath}")

update_file('academics/middle/index.html')
update_file('src/pages/academics.tsx')
