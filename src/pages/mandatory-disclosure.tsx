import { PageHeader } from '../components/page-header'

export const MandatoryDisclosurePage = () => {
    return `
    ${PageHeader(
        'Mandatory Public Disclosure',
        'APPENDIX - IX | As per AICTE Guidelines',
        '/static/images/hero.png',
        'Mandatory Disclosure'
    )}

    <!-- A: General Information -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">A. General Information</h2>
            
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                    <thead class="bg-orange-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">INFORMATION</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">1</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">NAME OF THE College</td>
                            <td class="border border-gray-300 px-4 py-3">SNS College of Technology</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">AFFILIATION NO.</td>
                            <td class="border border-gray-300 px-4 py-3">1930610</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">3</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">College CODE</td>
                            <td class="border border-gray-300 px-4 py-3">55513</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">4</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">COMPLETE ADDRESS WITH PIN CODE</td>
                            <td class="border border-gray-300 px-4 py-3">538, Thudiyalur-Saravanampatti Road, Vellakinar Post, Coimbatore - 641029, Tamil Nadu</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">5</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">PRINCIPAL NAME</td>
                            <td class="border border-gray-300 px-4 py-3">Sri Vidhya Prince</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">6</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">PRINCIPAL QUALIFICATION</td>
                            <td class="border border-gray-300 px-4 py-3">M.Sc, M.Ed, M.Phil</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">7</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">College EMAIL ID</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="mailto:office@snsacademy.org" class="text-orange-600 hover:underline">office@snsacademy.org</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">8</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">CONTACT DETAILS</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="tel:+919629937861" class="text-orange-600 hover:underline">+91 96299 37861</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- B: Documents and Information -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">B. Documents and Information</h2>
            
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300 bg-white">
                    <thead class="bg-orange-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">DOCUMENTS/INFORMATION</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">LINKS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">1</td>
                            <td class="border border-gray-300 px-4 py-3">Copies of Affiliation/Upgradation Letter and Recent Extension of Affiliation</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/affiliationUpgradation/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2</td>
                            <td class="border border-gray-300 px-4 py-3">Copies of Trust Registration/Renewal Certificate</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/TRUST_DEED/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">3</td>
                            <td class="border border-gray-300 px-4 py-3">Copy of No Objection Certificate (NOC) Issued by State Govt.</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/noc/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">4</td>
                            <td class="border border-gray-300 px-4 py-3">Copies of Recognition Certificate Under RTE Act, 2009</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/recognitionCertificate/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">5</td>
                            <td class="border border-gray-300 px-4 py-3">Copy of Valid Building Safety Certificate</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsct.org/Building%20Safety%20certificate.pdf" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">6</td>
                            <td class="border border-gray-300 px-4 py-3">Copy of Valid Fire Safety Certificate</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/FireSafetyCertificate/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">7</td>
                            <td class="border border-gray-300 px-4 py-3">Copy of DEO Certificate / Self Certificate</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/SelfCertification/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">8</td>
                            <td class="border border-gray-300 px-4 py-3">Copies of Valid Water, Health and Sanitation Certificates</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/WaterHealthSanitationCertificates/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p class="text-sm text-gray-700"><strong>NOTE:</strong> The College uploads self-attested copies of above listed documents by Chairman/Manager/Secretary and Principal. If it is noticed at a later stage that uploaded documents are not genuine, the College shall be liable for action as per norms.</p>
            </div>
        </div>
    </section>

    <!-- C: Result and Academics -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">C. Result and Academics</h2>
            
            <div class="overflow-x-auto mb-8">
                <table class="w-full border-collapse border border-gray-300">
                    <thead class="bg-orange-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">DOCUMENTS/INFORMATION</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">LINKS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">1</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Fee Structure of the College</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/FeeStructure/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Annual Academic Calendar</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/AcademicCalender/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">3</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">List of College Management Committee (SMC)</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/CollegeManagementCommittee/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">4</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">List of Stakeholders Teachers Association (PTA) Members</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/StakeholdersTeachersAssociation/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">5</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Last Three-Year Result of Board Examination</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/Three-YearResult/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-2xl font-bold mb-6 text-gray-900">NAAC A++ Board Results - Final Year</h3>
            <div class="overflow-x-auto mb-8">
                <table class="w-full border-collapse border border-gray-300">
                    <thead class="bg-green-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Year</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Registered Students</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Students Passed</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Pass Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2021-2022</td>
                            <td class="border border-gray-300 px-4 py-3">30</td>
                            <td class="border border-gray-300 px-4 py-3">30</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2022-2023</td>
                            <td class="border border-gray-300 px-4 py-3">40</td>
                            <td class="border border-gray-300 px-4 py-3">40</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2023-2024</td>
                            <td class="border border-gray-300 px-4 py-3">53</td>
                            <td class="border border-gray-300 px-4 py-3">53</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-2xl font-bold mb-6 text-gray-900">NAAC A++ Board Results - Final YearII</h3>
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                    <thead class="bg-blue-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Year</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Registered Students</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Students Passed</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Pass Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2021-2022</td>
                            <td class="border border-gray-300 px-4 py-3">42</td>
                            <td class="border border-gray-300 px-4 py-3">42</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2022-2023</td>
                            <td class="border border-gray-300 px-4 py-3">49</td>
                            <td class="border border-gray-300 px-4 py-3">49</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2023-2024</td>
                            <td class="border border-gray-300 px-4 py-3">37</td>
                            <td class="border border-gray-300 px-4 py-3">37</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- D: Staff (Teaching) -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">D. Staff (Teaching)</h2>
            
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300 bg-white">
                    <thead class="bg-orange-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">INFORMATION</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">1</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Principal</td>
                            <td class="border border-gray-300 px-4 py-3">Sri Vidhya Prince</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Total Number of Teachers</td>
                            <td class="border border-gray-300 px-4 py-3">
                                <div class="space-y-1">
                                    <div><strong>Total:</strong> 54</div>
                                    <div>PGT (Post Graduate Teachers): 14</div>
                                    <div>TGT (Trained Graduate Teachers): 18</div>
                                    <div>PRT (Primary Teachers): 22</div>
                                </div>
                            </td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">3</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Teachers Section Ratio</td>
                            <td class="border border-gray-300 px-4 py-3">1:1.5</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">4</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Details of Special Educator</td>
                            <td class="border border-gray-300 px-4 py-3">1</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">5</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Details of Counsellor and Wellness Teacher</td>
                            <td class="border border-gray-300 px-4 py-3">1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- E: College Infrastructure -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">E. College Infrastructure</h2>
            
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                    <thead class="bg-orange-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">INFORMATION</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">1</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Total Campus Area (in sq mtr)</td>
                            <td class="border border-gray-300 px-4 py-3">9,176 sq mtr</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">No. and Size of Classrooms (in sq mtr)</td>
                            <td class="border border-gray-300 px-4 py-3">36 Classrooms | 589 sq mtr</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">3</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">No. and Size of Laboratories including Computer Labs (in sq mtr)</td>
                            <td class="border border-gray-300 px-4 py-3">5 Laboratories | 669 sq mtr</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">4</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Internet Facility</td>
                            <td class="border border-gray-300 px-4 py-3"><span class="text-green-600 font-bold">YES</span></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">5</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">No. of Girls Toilets</td>
                            <td class="border border-gray-300 px-4 py-3">53</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">6</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">No. of Boys Toilets</td>
                            <td class="border border-gray-300 px-4 py-3">36</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">7</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">YouTube Video of College Inspection</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://youtu.be/rrJq-eqWxSc" target="_blank" class="text-orange-600 hover:underline font-semibold">Watch Video</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- F: SARAS -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">F. SARAS</h2>
            
            <div class="bg-white rounded-xl shadow-lg p-8">
                <div class="flex items-center justify-between">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Complete Mandatory Disclosure PDF</h3>
                        <p class="text-gray-600">Download the complete mandatory disclosure document as per AICTE Guidelines</p>
                    </div>
                    <a href="https://snsacademy.org/MandatoryDisclosurePDF/" target="_blank" class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition inline-flex items-center">
                        <i class="fas fa-download mr-2"></i>
                        Download PDF
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-4">Questions About Our Disclosures?</h2>
            <p class="text-xl mb-8">Contact our office for any queries regarding mandatory disclosures and documentation</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" class="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition">
                    <i class="fas fa-envelope mr-2"></i>
                    Contact Us
                </a>
                <a href="tel:+919629937861" class="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-bold transition">
                    <i class="fas fa-phone mr-2"></i>
                    Call: +91 96299 37861
                </a>
            </div>
        </div>
    </section>
  `;
};
