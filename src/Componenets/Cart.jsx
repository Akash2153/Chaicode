import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './Cartcontex';

const Cart = () => {
  const { cartItems, total, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="container mx-auto mb-4 p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/shop" className="text-blue-500 underline">Continue shopping</Link></p>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          {cartItems.map(item => (
            <div key={item.id} className="w-full max-w-2xl flex items-center justify-between border border-gray-300 rounded-lg py-4 mb-4 shadow-md bg-white">
              <div className="flex items-center">
                <img src={item.img} alt={item.name} className="w-32 h-32 object-cover mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500 hover:text-red-700">Remove</button>
              </div>
            </div>
          ))}
          <div className="mt-6 w-full max-w-2xl text-left">
            <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
            <Link to="/checkout">
              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-200">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
