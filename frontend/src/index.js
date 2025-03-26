// frontend/src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";  // Ensure using BrowserRouter from react-router-dom
import App from "./App";
import { CartProvider } from "./context/CartContext";  // Ensure correct context provider
import "./styles/index.css";  // Your global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <CartProvider>
            <App />
        </CartProvider>
    </Router>
);
