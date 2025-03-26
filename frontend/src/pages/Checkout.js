import React, { useState } from "react";

const Checkout = () => {
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: "",
        expirationDate: "",
        cvv: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle payment and order submission
        alert("Order placed successfully!");
    };

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={paymentInfo.cardNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Expiration Date</label>
                    <input
                        type="text"
                        name="expirationDate"
                        value={paymentInfo.expirationDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>CVV</label>
                    <input
                        type="text"
                        name="cvv"
                        value={paymentInfo.cvv}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default Checkout;
