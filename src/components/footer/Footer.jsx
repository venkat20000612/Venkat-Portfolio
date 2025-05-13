import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaSafari, FaSuitcase, FaJoomla } from 'react-icons/fa';


const Footer = () => {
  return (
    <div>
        <footer class="bg-gray-900 text-white py-6">
        <div class="container mx-auto text-center px-4">
            <div class="flex justify-center mb-4 space-x-3">
                <a href="https://www.linkedin.com/in/venkata-rao-annam-47a577202/" target="_blank"
                    class="text-white hover:text-blue-500">
                    <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/venkat20000612" target="_blank"
                    class="text-white hover:text-gray-500">
                   <FaGithub size={20} />
                </a>
                <a href="mailto:your-venkataraoannam97@gmail.com" target="_blank" class="text-white hover:text-red-500">
                <FaEnvelope size={20} />
                </a>
                <a href="https://www.naukri.com/mnjuser/profile" target="_blank"
                    class="text-white hover:text-blue-500">
                    
                    <FaSuitcase size={20}/>
                </a>
                
            </div>
            <p class="text-white text-sm">
                &copy; 2024 Venkat. All Rights Reserved. | Built with 💻
            </p>
        </div>
    </footer>
    </div>
  )
}

export default Footer