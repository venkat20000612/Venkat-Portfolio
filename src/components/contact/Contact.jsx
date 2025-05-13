import React, { useState } from 'react';
import resume from '../../assets/venkata_rao_cv.pdf';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    // State for EmailJS
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    // State for Google Sheets
    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        Phone: "",
        Message: "",
    });

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Submit Handler for both EmailJS and Google Sheets
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setIsSubmitting(true);

        // EmailJS Configuration
        const serviceId = 'service_9y49gsv';
        const templateId = 'template_7vmtasi';
        const publicKey = 'P2X0m7z_VBdpr02A1';

        const templateParams = {
            from_name: name,
            from_email: email,
            from_phone: phone,
            to_name: "Venkat",
            message: message,
        };

        try {
            // Send Email via EmailJS
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            toast.success("Message sent successfully!");

            // Store Data in Google Sheets
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbyqsCPh_6QwUslmL4vcWLr2tWsA0yZwte9M_QYefvlNMkFomI8be3yrd29PGc9hwYvC/exec",
                {
                    method: "POST",
                    body: JSON.stringify(formData),
                }
            );

            const result = await response.json();
            if (result.status === "success") {
                console.log("Data Storred successfully!");
            } else {
                toast.error("Failed to store data.");
            }

            // Clear Form Fields
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setFormData({ Name: "", Email: "", Phone: "", Message: "" });
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred. Please try again.");
        } finally {
            setLoading(false);
            setIsSubmitting(false);
        }
    };

    return (
        <div id='contact'>
            {/* Section Title */}
            <div className="mt-10 text-center mb-8 sm:mb-12" data-aos="fade-up">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-indigo-600 mb-4">
                    <u>Contact</u>
                </h2>
            </div>

            {/* Resume & Form Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">

                {/* Resume Download Section */}
                <section id="resume" className="py-12 sm:py-16 md:py-20">
                    <div data-aos="fade-right" data-aos-duration="2300" className="container mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-6">
                            <u>Resume</u>
                        </h2>
                        <p className="text-base sm:text-lg text-white mb-6">
                            Download my resume to learn more about my professional journey and skills.
                        </p>
                        <a href={resume} download
                            className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-lg sm:text-xl">
                            🙂 Download My Resume
                        </a>
                    </div>
                </section>

                {/* Contact Form */}
                <form data-aos="fade-left" data-aos-duration="2300" onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
                    {/* Name Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="Name" id="name" value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                handleChange(e);
                            }} required
                            className="block py-2.5 px-0 w-full text-white text-lg bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label htmlFor="name" className="absolute text-lg text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold">
                            Name
                        </label>
                    </div>

                    {/* Email Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="Email" id="email"
                            value={email} onChange={(e) => {
                                setEmail(e.target.value);
                                handleChange(e);
                            }} required
                            className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label htmlFor="email" className="absolute text-lg text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold">
                            Email address
                        </label>
                    </div>

                    {/* Phone Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="tel" name="Phone" id="phone"
                            value={phone} onChange={(e) => {
                                setPhone(e.target.value);
                                handleChange(e);
                            }} required
                            className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label htmlFor="phone" className="absolute text-lg text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold">
                            Phone
                        </label>
                    </div>

                    {/* Message Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <textarea type="text" name="Message" id="message" rows={3}
                            value={message} onChange={(e) => {
                                setMessage(e.target.value);
                                handleChange(e);
                            }} required
                            className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        ></textarea>
                        <label htmlFor="message" className="absolute text-lg text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold">
                            Message
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 cursor-pointer">
                        {loading || isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
