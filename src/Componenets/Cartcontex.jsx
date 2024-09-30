import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
    calculateTotal(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    calculateTotal(cartItems);
  }, [cartItems]);

  const calculateTotal = (items) => {
    const newTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      total,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};