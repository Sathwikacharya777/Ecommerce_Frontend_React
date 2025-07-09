import React, { useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCart } from "../context/useCart";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const products = useSelector((state) => state.product.products);

  const product = useMemo(() => {
    return products.find((p) => p.id === parseInt(id));
  }, [products, id]); // ✅ Only recomputes if products or id changes

  const handleAddToCart = useCallback(() => {
    addToCart(product);
  }, [addToCart, product]);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="details-text">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">₹{product.price}</p>
        <button className="btn add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
