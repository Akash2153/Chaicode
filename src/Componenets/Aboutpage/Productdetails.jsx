import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../Cartcontex';
import productData from '../../Product.json';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Productdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = productData.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Product Not Found</h2>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast('Product added to cart!');
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 flex flex-col items-center mt-20">
      <button
        className="mb-8 px-6 py-2 bg-white text-blue-600 rounded-full shadow-md hover:bg-blue-50 transition duration-300"
        onClick={() => navigate(-1)}
      >
        ← Back to Products
      </button>
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-[700px] h-[400px] flex">
        <div className="w-1/2 p-6 flex items-center justify-center">
          <img
            src={product.img}
            alt={product.name}
            className="max-w-full max-h-full object-cover rounded-2xl"
          />
        </div>
        <div className="w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-4 text-gray-800">{product.name}</h1>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <div className="border-b border-gray-200 mb-2"></div>
            <div className="mb-2">
              <span className="text-2xl font-bold text-red-600">${product.price}</span>
              <span className="ml-2 text-sm text-gray-500">
                List: <span className="line-through">${(product.price * 1.2).toFixed(2)}</span>
              </span>
            </div>
            <p className="text-gray-700 mb-4 text-sm line-clamp-3">{product.description}</p>
          </div>
          <div className="space-y-2">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300 text-sm flex items-center justify-center"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleBuyNow}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 text-sm"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
