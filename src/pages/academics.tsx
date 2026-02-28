
import { PageHeader } from '../components/page-header'

export const PrePrimaryPage = () => {
    return `
    ${PageHeader(
        'Undergraduate Programs', 
        'Building strong foundations through project-based learning, curiosity, and foundational development', 
        '/static/images/pre-primary.png',
        'Pre-Primary (Ages 2.5 - 5 Years)'
    )}

    

    <!-- Age Groups -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Pre-Primary Programs</h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">Tailored learning experiences for every stage of foundational.</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <!-- Undergraduate -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300">
                    <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-baby text-3xl text-purple-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Undergraduate (2.5-3.5 years)</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                        Our youngest students enjoy a hands-on, fun curriculum with opportunities to think, speak, and listen in various situations.
                    </p>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i>Communication & language</li>
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i>Indoor & outdoor learning</li>
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i>Motor skills development</li>
                    </ul>
                </div>

                <!-- LKG -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300">
                    <div class="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-student-reaching text-3xl text-pink-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Lower KG (3.5-4.5 years)</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                        More structured day with emphasis on early English and Mathematics skills, while maintaining a balanced program.
                    </p>
                    <ul class="space-y-3 text-sm text-gray-500">
                         <li class="flex items-center"><i class="fas fa-check text-pink-500 mr-2"></i>Phonics & early reading</li>
                        <li class="flex items-center"><i class="fas fa-check text-pink-500 mr-2"></i>Basic mathematics concepts</li>
                        <li class="flex items-center"><i class="fas fa-check text-pink-500 mr-2"></i>Creative arts & design</li>
                    </ul>
                </div>

                <!-- UKG -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300">
                    <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-student text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Upper KG (4.5-5.5 years)</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                        Preparing for formal Education with advanced literacy and numeracy skills, critical thinking, and creativity.
                    </p>
                    <ul class="space-y-3 text-sm text-gray-500">
                         <li class="flex items-center"><i class="fas fa-check text-blue-500 mr-2"></i>Blending & segmentation</li>
                        <li class="flex items-center"><i class="fas fa-check text-blue-500 mr-2"></i>Early writing skills</li>
                        <li class="flex items-center"><i class="fas fa-check text-blue-500 mr-2"></i>University readiness preparation</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Learning Programs -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16">
                <!-- Literacy Program -->
                <div class="bg-blue-50 rounded-3xl p-10">
                    <div class="flex items-center mb-6">
                        <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                            <i class="fas fa-book-open text-2xl text-blue-600"></i>
                        </div>
                        <h3 class="text-3xl font-bold text-gray-900">Literacy Programme</h3>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-8">
                        We place great emphasis on developing early Literacy skills to provide your student with a 'head start' in their education. Through well-established literacy programmes, students are taught fundamental skills essential for early reading and writing success.
                    </p>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Fun and interactive introduction to alphabetic sounds and phonics</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Letter recognition and sound association</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Early reading and writing development</span>
                        </li>
                    </ul>
                </div>

                <!-- Numeracy Program -->
                <div class="bg-green-50 rounded-3xl p-10">
                    <div class="flex items-center mb-6">
                        <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                            <i class="fas fa-calculator text-2xl text-green-600"></i>
                        </div>
                        <h3 class="text-3xl font-bold text-gray-900">Numeracy Programme</h3>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-8">
                        Our Numeracy programme draws on the young student's natural mathematical interest and encourages numerical proficiency. Students participate in meaningful and fun activities that build their initial understanding.
                    </p>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Number recognition and counting</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Shapes, patterns, and spatial awareness</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Real-life mathematical experiences</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-purple-900 text-white relative overflow-hidden">
         <div class="absolute inset-0 bg-[url('https://www.transstakeholdertextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl font-bold mb-6">Give Your Student the Best Start</h2>
            <p class="text-xl mb-10 text-purple-100 font-light">
                Join SNS College of Technology's Pre-Primary program and watch your student thrive.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-purple-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg shrink-0">
                    Apply for Admission
                </a>
                <a href="/contact" class="bg-purple-800 border border-purple-700 hover:bg-purple-700 px-10 py-4 rounded-full font-bold text-lg transition shrink-0">
                    Schedule Visit
                </a>
            </div>
        </div>
    </section>
  `;
};

export const PrimaryPage = () => {
    return `
    ${PageHeader(
        'Postgraduate Programs', 
        'Exploratory learning and explicit core skills for a strong educational foundation', 
        '/static/images/primary.png',
        'Primary (Grades 1 - 5)'
    )}

    <!-- Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <span class="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Curriculum</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">NAAC A++ with Innovation</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        SNS College of Technology follows Autonomous curriculum enhanced with design thinking methodologies. Core English and Mathematics skills are explicitly taught from foundation, while the broader skills of Literacy and Numeracy are developed across all subject areas.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        All classrooms are equipped with smart boards which are used regularly to facilitate learning, making education interactive and engaging.
                    </p>
                </div>
                <div class="relative">
                    <div class="absolute -top-4 -right-4 w-24 h-24 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                     <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <img src="/static/images/SNS College of Technology Web/Postgraduate Programs.png" alt="Primary Classroom" class="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]">
                </div>
            </div>
        </div>
    </section>

    <!-- Goals Box -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
                <div class="text-center mb-10">
                    <h2 class="text-3xl font-bold text-gray-900">Our Primary Goals</h2>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600 text-2xl"><i class="fas fa-globe"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Global Citizens</h3>
                        <p class="text-sm text-gray-500">Equipping students for a globalized world</p>
                    </div>
                     <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-4 text-green-600 text-2xl"><i class="fas fa-graduation-cap"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Successful Learners</h3>
                        <p class="text-sm text-gray-500">Developing independent study skills</p>
                    </div>
                     <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-4 text-orange-600 text-2xl"><i class="fas fa-hands-helping"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Social Justice</h3>
                        <p class="text-sm text-gray-500">Fostering strong community values</p>
                    </div>
                     <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-4 text-purple-600 text-2xl"><i class="fas fa-brain"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Critical Thinking</h3>
                        <p class="text-sm text-gray-500">Encouraging creative problem solving</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- CTA -->
    <section class="py-24 bg-orange-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://www.transstakeholdertextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl font-bold mb-6">Nurture Your Student's Potential</h2>
            <p class="text-xl mb-10 text-orange-100 font-light">
                Experience world-class Postgraduate Programs with design thinking approach.
            </p>
             <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-orange-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg shrink-0">
                    Apply for Admission
                </a>
                <a href="/contact" class="bg-orange-800 border border-orange-700 hover:bg-orange-700 px-10 py-4 rounded-full font-bold text-lg transition shrink-0">
                    Schedule Visit
                </a>
            </div>
        </div>
    </section>
  `;
}

export const MiddleCollegePage = () => {
    return `
    ${PageHeader(
        'Middle College Education', 
        'Developing critical thinking, problem-solving, and collaborative skills through project-based learning', 
        '/static/images/middle.png',
        'Middle College (Grades 6 - 8)'
    )}

    

        <!-- Program Overview -->
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

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
                <!-- Semester 3 -->
                <div class="bg-blue-50/70 rounded-2xl p-6 sm:p-8 lg:p-10 hover:shadow-md transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm text-blue-600 text-2xl font-bold font-sans">
                        6
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Semester 3 Learners</h3>
                    <p class="text-blue-600 font-semibold mb-4">Transitioning to independent thinkers</p>
                    <p class="text-gray-700 mb-6 text-sm leading-relaxed ">Semester 3 supports students as they move from guided learning to greater independence, building confidence and responsibility within the Academic Framework.</p>
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
                <div class="bg-purple-50/70 rounded-2xl p-6 sm:p-8 lg:p-10 hover:shadow-md transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm text-purple-600 text-2xl font-bold font-sans">
                        7
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Grade 7 Learners</h3>
                    <p class="text-purple-600 font-semibold mb-4">From curiosity to conceptual understanding</p>
                    <p class="text-gray-700 mb-6 text-sm leading-relaxed ">Grade 7 encourages deeper learning through concept-based and experiential approaches, helping students connect ideas beyond textbooks.</p>
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
                <div class="bg-orange-50/70 rounded-2xl p-6 sm:p-8 lg:p-10 hover:shadow-md transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm text-orange-600 text-2xl font-bold font-sans">
                        8
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Grade 8 Learners</h3>
                    <p class="text-orange-600 font-semibold mb-4">Building responsibility and leadership</p>
                    <p class="text-gray-700 mb-6 text-sm leading-relaxed ">Grade 8 prepares students for higher academic challenges while nurturing leadership, accountability, and personal growth.</p>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🎯</span> <span class="pt-0.5">Strong academic focus and accountability</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">⏱️</span> <span class="pt-0.5">Independent learning and time management</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">⭐</span> <span class="pt-0.5">Leadership and decision-making skills</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🧠</span> <span class="pt-0.5">Emotional and social maturity</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🏛️</span> <span class="pt-0.5">Leadership roles through clubs and activities</span></li>
                        <li class="flex items-start"><span class="mr-3 mt-0.5 text-lg">🤝</span> <span class="pt-0.5">Responsible participation in College community</span></li>
                    </ul>
                </div>
            </div></div>
        </div>
    </section>

    <!-- Design Thinking Framework Grid -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Design Thinking in Action</h2>
                <p class="text-gray-600">The 5-step process our middle College students apply to every project.</p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div class="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-heart text-3xl text-orange-500 mb-3"></i>
                    <h4 class="font-bold">1. Empathize</h4>
                </div>
                <div class="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-crosshairs text-3xl text-blue-500 mb-3"></i>
                    <h4 class="font-bold">2. Define</h4>
                </div>
                <div class="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-lightbulb text-3xl text-yellow-500 mb-3"></i>
                    <h4 class="font-bold">3. Ideate</h4>
                </div>
                <div class="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-tools text-3xl text-green-500 mb-3"></i>
                    <h4 class="font-bold">4. Prototype</h4>
                </div>
                 <div class="col-span-2 md:col-span-1 bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-vial text-3xl text-purple-500 mb-3"></i>
                    <h4 class="font-bold">5. Test</h4>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://www.transstakeholdertextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl font-bold mb-6">Join Our Middle College Community</h2>
            <p class="text-xl mb-10 text-blue-100 font-light">
                Give your student the opportunity to develop critical thinking, creativity, and problem-solving skills.
            </p>
             <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg shrink-0">
                    Apply for Admission
                </a>
                <a href="/contact" class="bg-blue-800 border border-blue-700 hover:bg-blue-700 px-10 py-4 rounded-full font-bold text-lg transition shrink-0">
                    Schedule Visit
                </a>
            </div>
        </div>
    </section>
  `;
}
