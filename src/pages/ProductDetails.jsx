import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/useCart"; // ✅ Import context
import products from "../data/products";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart(); // ✅ Access addToCart
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="info">
        <p className="desc">{product.name}</p>
        <p className="desc">{product.description}</p>
        <p className="desc">Price: ₹{product.price}</p>
        <button
          className="add-btn"
          onClick={() => addToCart(product)} // ✅ Add to cart logic
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
