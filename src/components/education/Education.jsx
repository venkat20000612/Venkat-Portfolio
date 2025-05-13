import React from 'react'

const Education = () => {
    return (
        <section id="education"
            class="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-500 to-purple-500 text-white mb-10">
            <div class="absolute inset-0 bg-gray-400 bg-opacity-70"></div>
            <div class="relative container mx-auto px-4">
            <div class="text-center sm:mb-12" data-aos="fade-up">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-indigo-600 mb-4"><u>Education & Certifications</u></h2>
            </div>
                <div class="mb-16" data-aos="fade-up">
                    <h3 class="text-2xl sm:text-3xl font-bold text-blue-300 mb-6">Academic Credentials</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div class="text-gray-900">
                            <div class="space-y-6">
                                <div class="flex flex-col sm:flex-row items-center">
                                    <div class="flex-1">
                                        <strong class="font-bold text-lg">B.TECH (ECE)</strong>
                                        <p class="text-black">Sree Venkateswara College of Engineering, Nellore (JNTU-A)</p>
                                    </div>
                                    <div class="flex-1 text-right">
                                        <p class="font-semibold text-black">72%</p>
                                        <span class="font-semibold text-black">2023</span>
                                    </div>
                                </div>
                                <div class="flex flex-col sm:flex-row items-center">
                                    <div class="flex-1">
                                        <strong class="font-bold text-lg">MPC</strong>
                                        <p class="text-black">Sai Sri Chaitanya Junior College, Nellore</p>
                                    </div>
                                    <div class="flex-1 text-right">
                                        <p class="font-semibold text-black">89%</p>
                                        <span class="font-semibold text-black">2019</span>
                                    </div>
                                </div>
                                <div class="flex flex-col sm:flex-row items-center">
                                    <div class="flex-1">
                                        <strong class="font-bold text-lg">S.S.C (English)</strong>
                                        <p class="text-black">M L N (EM) High School, Nellore</p>
                                    </div>
                                    <div class="flex-1 text-right">
                                        <p class="font-semibold text-black">79%</p>
                                        <span class="font-semibold text-black">2017</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <h3 class="text-2xl sm:text-3xl font-bold text-blue-300 mb-6">Certifications</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div class="text-gray-800">
                            <div class="space-y-6">
                                <div class="flex flex-col sm:flex-row items-center">
                                    <div class="flex-1">
                                        <strong class="font-bold text-lg">Full Stack Developer Course</strong>
                                        <p class="text-black">Digit Institue, Hyderabad</p>
                                    </div>
                                    <div class="flex-1 text-right">
                                        <p class="font-semibold text-black">May - November 2023</p>
                                        <p class="text-black">Technologies: Python, SQL, HTML, CSS, ReactJs</p>
                                    </div>
                                </div>
                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education