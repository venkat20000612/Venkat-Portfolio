import { FaWhatsapp } from "react-icons/fa";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Chatbot from "./components/chatbot/chatbot";

function App() {


   // ✅ AOS Initialization
   useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // THis for the whatsapp draggable icon
  useEffect(() => {
    let isDragging = false;
    let offsetX, offsetY;

    const whatsappIcon = document.getElementById('whatsappIcon');

    const onMouseDown = (e) => {
      isDragging = true;
      offsetX = e.clientX - whatsappIcon.getBoundingClientRect().left;
      offsetY = e.clientY - whatsappIcon.getBoundingClientRect().top;
      whatsappIcon.style.cursor = 'grabbing';
    };

    const onMouseMove = (e) => {
      if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        whatsappIcon.style.left = `${x}px`;
        whatsappIcon.style.top = `${y}px`;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
      whatsappIcon.style.cursor = 'grab';
    };

    whatsappIcon.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      whatsappIcon.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);


  
  

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Education />
      <ToastContainer />
      <Contact />
      <Footer />
      <Chatbot />
      
      
      <div>
      <a href="https://wa.me/9133822302" id="whatsappLink" target="_blank" rel="noopener noreferrer">
        <div id="whatsappIcon" className="fixed bottom-[90px] right-[20px] cursor-grab text-[3rem] text-[#25d366] bg-transparent p-[10px] rounded-full w-[50px] h-[50px] flex justify-center items-center text-center z-[100]">
          <FaWhatsapp size={50} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-[#25d366] rounded-full z-[-1] animate-pulse"></div>
        </div>
      </a>

      
      </div>

      
    </div>
  );
}

export default App;
