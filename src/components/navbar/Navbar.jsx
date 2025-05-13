import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('home'); // State to track active link

    const toggleMenu = () => setIsOpen(!isOpen);
    const handleMenuClick = (section) => {
        setActive(section);
        setIsOpen(false); // Close mobile menu on item click
    };

    return (
        <nav className="text-white shadow-lg fixed top-0 w-full z-50 bg-gray-900 dark:text-gray-100 dark:bg-slate-900 duration-100">
            <div className="container mx-auto flex justify-between items-center">
                <a data-aos="fade-right" href="#" className="text-3xl font-bold"><img src={logo} alt="Logo" className='h-20 w-30 object-contain bg-transparent' /></a>

                {/* Desktop Menu */}
                <ul data-aos="fade-down" className="hidden md:flex space-x-8 text-lg">
                    {['home', 'about', 'projects', 'education', 'contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                onClick={() => handleMenuClick(item)}
                                className={`hover:text-gray-300 text-lg md:font-medium ${active === item ? 'border-b-2 border-indigo-400' : ''}`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Side Menu */}
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: isOpen ? '0%' : '-100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 left-0 h-full w-64 bg-gray-700 text-white flex flex-col items-start p-6 z-50"
            >
                <button onClick={toggleMenu} className="self-end mb-6">
                    <X size={28} />
                </button>

                <ul className="space-y-6 text-lg">
                    {['home', 'about', 'projects','education', 'contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                onClick={() => handleMenuClick(item)}
                                className={`${active === item ? 'border-l-4 border-indigo-400' : ''}`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
            
        </nav>
    );
};

export default Navbar;
