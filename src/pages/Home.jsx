import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import products from "../data/products";
import "../styles/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const getCategories = () => {
  const unique = new Set(products.map((p) => p.category));
  return ["All", ...unique];
};

function Home() {
  const [inputValue, setInputValue] = useState(""); 
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState(""); 
  const categories = getCategories();
  const { addToCart } = useCart(); 

// 🔽 Filter function combining category + price
const filteredProducts = products.filter((product) => {
  const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;

  let priceMatch = true;
  if (selectedPrice) {
    if (selectedPrice === "10000+") {
      priceMatch = product.price >= 10000;
    } else {
      const [min, max] = selectedPrice.split("-").map(Number);
      priceMatch = product.price >= min && product.price <= max;
    }
  }

  const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

  return categoryMatch && priceMatch && searchMatch;
});


  // 🔽 Group filtered products by category for section display
  const grouped = filteredProducts.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});


  return (
    <>
      {/* Offer Image Slider */}
      <div className="offer-slider">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          interval={3000}
          transitionTime={800}
        >
          <div>
            <img src="/assets/banner3.png" alt="Banner 1" />
          </div>
          <div>
            <img src="/assets/banner2.png" alt="Banner 2" />
          </div>
          <div>
            <img src="/assets/banner1.png" alt="Banner 3" />
          </div>
        </Carousel>
      </div>

      <div className="home">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Type to search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="search-icon"
            onClick={() => setSearchTerm(inputValue)} // 🔍 Triggers search only on click
          >
            🔍
          </button>
        </div>

        <div className="filter-bar">
          {/* Category Filter */}
          <div className="filter-group">
            <label>Filter by Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Price Filter */}
          <div className="filter-group">
            <label>Filter by Price:</label>
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            >
              <option value="">All</option>
              <option value="0-999">Below ₹1000</option>
              <option value="1000-1999">₹1000 - ₹1999</option>
              <option value="2000-4999">₹2000 - ₹4999</option>
              <option value="5000-9999">₹5000 - ₹9999</option>
              <option value="10000+">Above ₹10000</option>
            </select>
          </div>
        </div>

        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h2 className="category-title">{category}</h2>
            <div className="product-row">
              {items
                  .filter((product) =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((product) => (                  
                <div className="product-card" key={product.id} >
                  <Link to={`/product/${product.id}`} className="product-card-link">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>₹{product.price}</p>
                  </Link>
                  <div className="buttons">
                    {/* <Link to={`/product/${product.id}`} className="btn details">
                      Details
                    </Link> */}
                    <button
                      className="btn add-to-cart"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
