import re

def style_secondary(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # We need to replace the Stream cards to match Image 1
    # Currently: bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg
    
    # Let's replace the whole grid section
    
    match = re.search(r'<div class="text-center mb-12">.*?<div class="grid md:grid-cols-3 gap-8">(.*?)</div>\s*</div>\s*</section>', content, flags=re.DOTALL)
    
    if match:
        new_grid = """
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Science Stream -->
                <div class="bg-cyan-50 rounded-2xl p-10 hover:shadow-md transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                        <i class="fas fa-flask text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 text-gray-900">Science Stream</h3>
                    <p class="text-gray-600 mb-6 font-semibold line-clamp-2 min-h-[48px]">Physics, Chemistry, Mathematics / Biology with Computer Science</p>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li class="flex items-start"><span class="mr-2 text-gray-400">•</span> Engineering & technology preparation</li>
                        <li class="flex items-start"><span class="mr-2 text-gray-400">•</span> Medical & allied health pathways</li>
                        <li class="flex items-start"><span class="mr-2 text-gray-400">•</span> Life sciences & research opportunities</li>
                        <li class="flex items-start"><span class="mr-2 text-gray-400">•</span> Computer science-enabled STEM careers</li>
                    </ul>
                </div>

                <!-- Commerce Stream -->
                <div class="bg-purple-50 rounded-2xl p-10 hover:shadow-md transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                        <i class="fas fa-calculator text-3xl text-purple-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 text-gray-900">Commerce Stream</h3>
                    <p class="text-gray-600 mb-6 font-semibold line-clamp-2 min-h-[48px]">Accountancy, Business Studies, Economics with Mathematics</p>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li class="flex items-start"><span class="mr-2 text-gray-400">•</span> CA / CS / CMA professional preparation</li>
                        <li class="flex items-start"><span class="mr-2 text-gray-400">•</span> Business & management foundations</li>
                        <li class="flex items-start"><span class="mr-2 text-gray-400">•</span> Finance, banking & economics pathways</li>
                        <li class="flex items-start"><span class="mr-2 text-gray-400">•</span> Analytics, entrepreneurship & startups</li>
                    </ul>
                </div>

                <!-- Humanities Stream -->
                <div class="bg-orange-50 rounded-2xl p-10 hover:shadow-md transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                        <i class="fas fa-book text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 text-gray-900">Humanities Stream</h3>
                    <p class="text-gray-600 mb-6 font-semibold line-clamp-2 min-h-[48px]">History, Political Science, Economics, Psychology</p>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li class="flex items-start"><span class="mr-2 text-gray-400">•</span> Civil services & government exam preparation</li>
                        <li class="flex items-start"><span class="mr-2 text-gray-400">•</span> Law, public policy & governance pathways</li>
                        <li class="flex items-start"><span class="mr-2 text-gray-400">•</span> Psychology & mental health foundations</li>
                        <li class="flex items-start"><span class="mr-2 text-gray-400">•</span> Social sciences research & critical thinking</li>
                    </ul>
                </div>
            </div>"""
        
        content = content[:match.start(1)] + new_grid.strip() + content[match.end(1):]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated Secondary in {filepath}")

def style_middle(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # We need to replace the Learner Profile cards to match Image 1 style
    
    match = re.search(r'<div class="grid md:grid-cols-3 gap-8 text-left">(.*?)</div>\s*</div>\s*</section>', content, flags=re.DOTALL)
    
    if match:
        new_grid = """
            <div class="grid md:grid-cols-3 gap-8 text-left">
                <!-- Semester 3 -->
                <div class="bg-blue-50/70 rounded-2xl p-10 hover:shadow-md transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm text-blue-600 text-2xl font-bold font-sans">
                        6
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Semester 3 Learners</h3>
                    <p class="text-blue-600 font-semibold mb-4">Transitioning to independent thinkers</p>
                    <p class="text-gray-700 mb-6 text-sm leading-relaxed min-h-[80px]">Semester 3 supports students as they move from guided learning to greater independence, building confidence and responsibility within the Academic Framework.</p>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">⭐</span> <span class="pt-0.5">Growing independence and responsibility</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🧠</span> <span class="pt-0.5">Critical-thinking and problem-solving skills</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">💬</span> <span class="pt-0.5">Confidence to express ideas and ask questions</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">📘</span> <span class="pt-0.5">Adaptation to structured academic learning</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">⏱️</span> <span class="pt-0.5">Development of study habits and self-discipline</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🤝</span> <span class="pt-0.5">Active classroom participation</span></li>
                    </ul>
                </div>

                <!-- Grade 7 -->
                <div class="bg-purple-50/70 rounded-2xl p-10 hover:shadow-md transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm text-purple-600 text-2xl font-bold font-sans">
                        7
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Grade 7 Learners</h3>
                    <p class="text-purple-600 font-semibold mb-4">From curiosity to conceptual understanding</p>
                    <p class="text-gray-700 mb-6 text-sm leading-relaxed min-h-[80px]">Grade 7 encourages deeper learning through concept-based and experiential approaches, helping students connect ideas beyond textbooks.</p>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🧠</span> <span class="pt-0.5">Enhanced analytical and logical reasoning</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🔍</span> <span class="pt-0.5">Inquiry-based and experiential learning</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">💬</span> <span class="pt-0.5">Improved communication and collaboration</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">📊</span> <span class="pt-0.5">Learning through projects and real-life applications</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🎨</span> <span class="pt-0.5">Creativity, teamwork, and value-based learning</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🚀</span> <span class="pt-0.5">Growing academic confidence</span></li>
                    </ul>
                </div>

                <!-- Grade 8 -->
                <div class="bg-orange-50/70 rounded-2xl p-10 hover:shadow-md transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm text-orange-600 text-2xl font-bold font-sans">
                        8
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Grade 8 Learners</h3>
                    <p class="text-orange-600 font-semibold mb-4">Building responsibility and leadership</p>
                    <p class="text-gray-700 mb-6 text-sm leading-relaxed min-h-[80px]">Grade 8 prepares students for higher academic challenges while nurturing leadership, accountability, and personal growth.</p>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🎯</span> <span class="pt-0.5">Strong academic focus and accountability</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">⏱️</span> <span class="pt-0.5">Independent learning and time management</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">⭐</span> <span class="pt-0.5">Leadership and decision-making skills</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🧠</span> <span class="pt-0.5">Emotional and social maturity</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🏛️</span> <span class="pt-0.5">Leadership roles through clubs and activities</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🤝</span> <span class="pt-0.5">Responsible participation in College community</span></li>
                    </ul>
                </div>
            </div>"""
        
        content = content[:match.start(1)] + new_grid.strip() + content[match.end(1):]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated Middle in {filepath}")

style_secondary('academics/secondary/index.html')
style_secondary('src/index.tsx')
style_middle('academics/middle/index.html')
style_middle('src/pages/academics.tsx')
