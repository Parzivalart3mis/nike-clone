import React, { useState, useEffect } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from API (you will need to set up the API)
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div>
            <h2>Our Products</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product._id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
