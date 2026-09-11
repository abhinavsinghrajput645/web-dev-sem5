import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <div className="product-image">{product.icon}</div>
      <span className="category">{product.category}</span>
      <h3>{product.name}</h3>
      <p className="price">₹{product.price.toLocaleString("en-IN")}</p>
      <button className="add-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;