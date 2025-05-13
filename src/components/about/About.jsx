import React from 'react';
import Aboutimage from '../../assets/about_image.png';
import { IoArrowForward } from 'react-icons/io5';

const About = () => {
  return (
    
    <section id="about"
        class="relative py-6 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-500 to-purple-500 text-white">
        <div class="absolute inset-0 bg-gray-400 bg-opacity-50"></div>
        <div class="relative container mx-auto px-4">
            <div class="text-center mb-8 sm:mb-12" data-aos="fade-up">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-indigo-600 mb-4"><u>About</u></h2>
                <p class="text-lg sm:text-xl text-black mx-auto max-w-3xl">
                I completed my undergraduate degree in Electronics and Communication Engineering at Sree Venkateswara College of Engineering. 
                During my studies, I learned HTML, CSS, and Python for web development. For my final year project, 
                I worked on credit card fraud detection using machine learning algorithms.
                </p>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-8">
                <div class="w-full sm:w-1/3 flex justify-center mb-8 sm:mb-0" data-aos="fade-right" data-aos-duration="3000">
                    <img src={Aboutimage} class="w-64 sm:w-72 md:w-80 h-auto object-cover rounded-md shadow-xl"
                        alt="Profile Image"/>
                </div>
                <div class="w-full sm:w-2/3 text-center sm:text-left">
                    <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">Full Stack Developer & Web
                        App Development</h3>
                    <p class="italic text-lg sm:text-xl text-gray-700 py-3">Passionate about developing scalable and
                        dynamic web applications.</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800">
                        <div>
                            <ul>
                                <li data-aos="fade-left" data-aos-duration="500" class="flex items-center mb-4">
                                    <i class="bi bi-chevron-right text-blue-600 mr-2"></i>
                                    <strong class="font-bold text-black">Birthday:&nbsp;</strong>
                                    <span class="font-semibold text-black"> 6 December 2000</span>
                                </li>
                                <li data-aos="fade-left" data-aos-duration="800" class="flex items-center mb-4">
                                    <i class="bi bi-linkedin text-blue-600 mr-2"></i>
                                    <a href="https://www.linkedin.com/in/venkata-rao-annam-47a577202/" target="_blank"
                                        class="font-semibold text-black hover:text-white">LinkedIn Profile</a>
                                </li>
                                <li data-aos="fade-left" data-aos-duration="1100" class="flex items-center mb-4">
                                    <i class="bi bi-github text-blue-600 mr-2"></i>
                                    <a href="https://github.com/venkat20000612" target="_blank"
                                        class="font-semibold text-black hover:text-white">GitHub Profile</a>
                                </li>
                                <li data-aos="fade-left" data-aos-duration="1400" class="flex items-center mb-4">
                                    <i class="bi bi-chevron-right text-blue-600 mr-2"></i>
                                    <strong class="font-bold text-black">Phone:&nbsp;</strong>
                                    <a href="tel:+916300131956"
                                        class="hover:text-white transition duration-300">
                                        +91 9133822302
                                    </a>
                                </li>
                                <li data-aos="fade-left" data-aos-duration="1700" class="flex items-center mb-4">
                                    <i class="bi bi-chevron-right text-blue-600 mr-2"></i>
                                    <strong class="font-bold text-black">Current City:&nbsp;</strong>
                                    <span class="font-semibold text-black"> Hyderabad, Telangana</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li data-aos="fade-left" data-aos-duration="2000" class="flex items-center mb-4">
                                    <i class="bi bi-chevron-right text-blue-600 mr-2"></i>
                                    <strong class="font-bold text-black">Graduate:&nbsp;</strong>
                                    <span class="font-semibold text-black"> B.Tech (ECE)</span>
                                </li>
                                <li data-aos="fade-left" data-aos-duration="2300" class="flex items-center mb-4">
                                    <i class="bi bi-chevron-right text-blue-600 mr-2"></i>
                                    <strong class="font-bold text-black">Email: &nbsp;</strong>
                                    <div class="flex flex-col">
                                        <a href="mailto:venkataraoannam97@gmail.com"
                                            class="hover:text-white transition duration-300 mb-2 mt-1">
                                            venkataraoannam97@gmail.com
                                        </a>
                                        
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <p class="py-3 text-lg sm:text-xl text-gray-800">My hobbies include playing cricket, video games, traveling, and listening to music. 
                        I am an optimistic person, a team player, and always strive to learn new things to grow professionally. 
                        That’s a little about me.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About