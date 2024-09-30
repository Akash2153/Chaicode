import React, { useState } from 'react';
import img from "../../assets/formim1.jpg";

export const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
     });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        
        // Here you would typically send the data to a server
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
                <h3 className="text-2xl font-semibold mt-4 text-gray-600">Have something to say? or ask, Fill in the contact form below!</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex items-center justify-center">
                    <img src={img} alt="Contact us" className="w-full h-auto rounded-lg " />
                </div>
                <div className="flex flex-col justify-center">
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white m-h-[800px] shadow-2xl p-8 rounded-xl">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter Your Name"
                                className="mt-1 block w-full h-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-50 border-2 border-gray-200 p-3"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-50 border-2 border-gray-200 p-3"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter Your Phone Number"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-50 border-2 border-gray-200 p-3"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Enter Your Message"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-50 border-2 border-gray-200 p-3"
                            ></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-lg font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Send Message</button>
                        </div>
                      
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;