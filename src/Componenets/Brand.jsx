// src/components/Brand.js
import React from 'react';
import { Link } from 'react-router-dom';
import Img from "../assets/tea3.png"; // Ensure you have an image in the specified path

const Brand = () => {
  return (
    <div className="container mx-auto p-6 mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center">About Chai Cofffee</h1>
      
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        {/* Brand Image */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img 
            src={Img} 
            alt="Chai Cofffee" 
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        
        {/* Brand Description */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Chai Cofffee was founded with a passion for delivering the finest coffee blends to our customers. Our journey began in a small café where the love for coffee brought people together. Today, we continue to uphold our commitment to quality, sustainability, and community.
          </p>
          <p className="text-gray-700 mb-4">
            We source our beans from the best plantations around the world, ensuring that every cup of Chai Cofffee is rich, aromatic, and satisfying. Our mission is to create memorable coffee experiences for everyone who walks through our doors or enjoys our products at home.
          </p>
          <Link to="/shop">
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
              Explore Our Products
            </button>
          </Link>
        </div>
      </div>
      
      {/* Additional Sections (Optional) */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Value 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p className="text-gray-600">
              We prioritize quality in every step, from bean selection to brewing methods, ensuring the best taste and experience.
            </p>
          </div>
          
          {/* Value 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              Committed to sustainable practices, we work closely with farmers to promote environmental stewardship and fair trade.
            </p>
          </div>
          
          {/* Value 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-gray-600">
              Building a strong community is at the heart of what we do. We strive to create welcoming spaces and support local initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
