import React, { useState, useEffect } from "react";  // Add useEffect import

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Fetch cart data from the backend
    fetch("/api/cart")
      .then((res) => res.json())
      .then((data) => {
        setCart(data.items);
        setTotal(data.total);
      });
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      <div>
        {cart.map((item) => (
          <div key={item.productId}>
            <p>{item.productName}</p>
            <p>Quantity: {item.quantity}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
