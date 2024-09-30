// Product.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Cartcontex';
import productData from '../../Product.json';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Product = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleEvent = (id) => {
    console.log("Navigating to product with ID:", id);
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success('Product added to cart!'); // Use toast.success for better visibility
  };

  return (
    <div className="bg-gray-100 p-4 mt-20">
      <h1 className="text-2xl font-bold mb-4 justify-center flex">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productData.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow w-[350px] rounded-2xl mx-auto">
            <img
              src={product.img}
              alt={product.name}
              className="w-[340px] h-[340px] object-fill cursor-pointer"
              onClick={() => handleEvent(product.id)}
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-gray-900 font-bold">Price: ${product.price}</p>
            <button 
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
