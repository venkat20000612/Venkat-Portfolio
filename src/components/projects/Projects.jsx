
import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import image1 from '../../assets/work-1.png';
import image2 from '../../assets/work-2.png';
import image3 from '../../assets/work-3.png';
import image4 from '../../assets/work-1.png';


const Projects = () => {
    const [showMore, setShowMore] = useState(false);
    const moreRef = useRef(null);

    const handleToggle = () => {
        setShowMore(prev => !prev);
    };

    useEffect(() => {
        if (showMore && moreRef.current) {
            // Wait a tiny bit to ensure cards are rendered
            setTimeout(() => {
                moreRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 100); 
        }
    }, [showMore]);

    return (
        <section id='projects' className='mb-10'>
            <div className="mt-10 text-center mb-8 sm:mb-12" data-aos="fade-up">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-indigo-600 mb-4"><u>Projects</u></h2>
            </div>

            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto px-6'>
                {/* First 3 Cards */}
                {[{
                    image: image1,
                    title: 'Digit Internship',
                    desc: 'The webpage is designed for educational purposes and is fully responsive.',
                    link: 'https://resilient-blini-46d933.netlify.app/'
                }, {
                    image: image2,
                    title: 'Zoblix Dashboard',
                    desc: 'The webpage is designed for personal dashboard purposes with 100% responsiveness.',
                    link: 'https://dainty-brioche-5ceec0.netlify.app/'
                }, {
                    image: image3,
                    title: 'Try Book Ai Website',
                    desc: 'The webpage tests my frontend skills and is fully responsive.',
                    link: 'https://lucent-marigold-5edcde.netlify.app/'
                }].map((project, index) => (
                    <a key={index} data-aos="flip-left" data-aos-duration="2300" className="block max-w-sm group relative overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center justify-center">
                        <img src={project.image} alt={project.title} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 p-4">
                            <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.desc}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 text-center justify-center">
                                View Project <ExternalLink size={20} />
                            </a>
                        </div>
                    </a>
                ))}

                {/* Extra Cards */}
                {showMore && (
                    <>
                        <div ref={moreRef} className="col-span-full"></div> {/* Scroll Target */}

                        {[{
                            image: image4,
                            title: 'Marks IT Solutions Website',
                            desc: 'A modern and professional company website designed for Marks IT Solutions with full responsiveness.',
                            link: '#'
                        }].map((project, index) => (
                            <a key={index} data-aos="flip-left" data-aos-duration="2300" className="block max-w-sm group relative overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center justify-center">
                                <img src={project.image} alt={project.title} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 p-4">
                                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.desc}</p>
                                    {/* <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 text-center justify-center">
                                        View Project <ExternalLink size={20} />
                                    </a> */}
                                </div>
                            </a>
                        ))}
                    </>
                )}
            </div>

            {/* View More / View Less Button */}
            <div className="text-center mt-10">
                <button
                    onClick={handleToggle}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 cursor-pointer"
                >
                    {showMore ? 'View Less' : 'View More'}
                </button>
            </div>
        </section>
    );
};

export default Projects;

