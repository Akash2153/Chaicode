import React from 'react';
import { Link } from 'react-router-dom';
import IMG from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";

import { useCart } from './Cartcontex';

const Header = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-pink-500 text-black p-4 fixed w-full top-0 shadow-md z-10">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center">
        <nav className='flex justify-evenly w-full items-center relative h-[50px]'>
          <Link to="/" className="text-lg hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="text-lg hover:text-white transition-colors">About</Link>
          <Link to="/brand" className="text-lg hover:text-white transition-colors">Brand</Link>
          <div className="logo w-[110px] h-[100px] absolute  mt-4">
            <img src={IMG} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <Link to="/shop" className="text-lg hover:text-white transition-colors ml-20 pl-8">Shop</Link>
          <Link to="/Localstore" className="text-lg hover:text-white transition-colors">Locate Store</Link>
          <Link to="/contact" className="text-lg hover:text-white transition-colors">Contact Us</Link>
        </nav>
        <div className="relative">
          <Link to="/cart" className="text-lg hover:text-white transition-colors">
            <FaShoppingCart className="text-xl" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;