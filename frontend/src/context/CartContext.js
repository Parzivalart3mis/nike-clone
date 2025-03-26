// frontend/src/context/CartContext.js
import React, { createContext, useState, useContext } from "react";

// Create the CartContext
const CartContext = createContext();

// CartProvider component to wrap the app and provide the cart state
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(product => product.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
