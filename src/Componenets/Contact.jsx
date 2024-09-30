import React, { useState } from 'react';

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State for form submission status
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate with your backend or an email service
    console.log('Form Data:', formData);
    setStatus('Your message has been sent successfully!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Contact Information */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">We’d love to hear from you! Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.</p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m4-4h4a2 2 0 012 2v4H7V6a2 2 0 012-2z" />
              </svg>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>Malegaon Road,Deola Nashik</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>abhamare0076@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a2 2 0 011.447.528l1.822 1.822a2 2 0 00.528 1.447L12 10.28l2.455-2.455a2 2 0 011.447-.528L19 3h3a2 2 0 012 2v14a2 2 0 01-2 2h-3.28a2 2 0 01-1.447-.528l-1.822-1.822a2 2 0 00-.528-1.447L12 13.72l-2.455 2.455a2 2 0 01-1.447.528H5a2 2 0 01-2-2V5z" />
              </svg>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>943543169</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zM21 21l-6-6" />
              </svg>
              <div>
                <h3 className="font-semibold">Social Media</h3>
                <p>
                  <a href="#" className="text-blue-500 hover:underline mr-2">Facebook</a>
                  <a href="#" className="text-blue-400 hover:underline mr-2">Twitter</a>
                  <a href="#" className="text-pink-500 hover:underline">Instagram</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          {status && <p className="mb-4 text-green-500">{status}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            
            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-gray-700">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
              />
            </div>
            
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required 
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <div>
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
