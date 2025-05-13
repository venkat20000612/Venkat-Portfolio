import React, { useEffect, useState } from 'react';
import backgroundImage from '../../assets/code.jpg';

const Home = () => {

    const texts = ["Web Developer"];
    const [currentText, setCurrentText] = useState("");
    const [endValue, setEndValue] = useState(0);
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText(texts[index].substring(0, endValue));

            if (isForward) {
                setEndValue((prev) => prev + 1);
            } else {
                setEndValue((prev) => prev - 1);
            }

            // When text is fully typed, switch to backward direction
            if (endValue >= texts[index].length) {
                setIsForward(false);
            }

            // When text is fully deleted, move to the next text
            if (endValue === 0 && !isForward) {
                setIsForward(true);
                setIndex((prev) => (prev + 1) % texts.length); // Cycle through texts
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, [endValue, isForward, index]);

    return (
        <div>
            <section
                id="home"
                className="hero bg-cover bg-center min-h-[50vh] sm:min-h-[60vh] flex flex-col justify-center items-center text-center relative px-4 sm:px-6 md:px-12"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
                }}
            >
               

                {/* Main Content */}
                <div className="relative z-10 text-white w-full max-w-4xl">
                    <h1 data-aos="zoom-in" className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 leading-tight">
                        Venkat
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2">
                        I'm <span className="text-indigo-500 duration-300 transition ease">{currentText}</span>
                        <span className="typed-cursor typed-cursor--blink">|</span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
