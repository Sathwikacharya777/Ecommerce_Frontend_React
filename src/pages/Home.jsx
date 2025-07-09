import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCart } from "../context/useCart";
import "../styles/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// 🔽 Initial filter state
const initialState = {
  category: "All",
  price: "",
  search: "",
};

// 🔽 Reducer function for filters
function filterReducer(state, action) {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

function Home() {
  const { addToCart } = useCart();
  const banners = useSelector(state => state.offers.banners);
  const products = useSelector(state => state.product.products);

  const [inputValue, setInputValue] = useState("");

  // 🔽 useReducer for filters
  const [filterState, dispatch] = useReducer(filterReducer, initialState);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // 🔍 Apply filters
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      filterState.category === "All" || product.category === filterState.category;

    let priceMatch = true;
    if (filterState.price) {
      if (filterState.price === "10000+") {
        priceMatch = product.price >= 10000;
      } else {
        const [min, max] = filterState.price.split("-").map(Number);
        priceMatch = product.price >= min && product.price <= max;
      }
    }

    const searchMatch = product.name
      .toLowerCase()
      .includes(filterState.search.toLowerCase());

    return categoryMatch && priceMatch && searchMatch;
  });

  // 🔗 Group filtered products by category
  const grouped = filteredProducts.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <>
      {/* 🔄 Offer Image Slider */}
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
          {banners.map((banner) => (
            <div key={banner.id}>
              <img src={banner.image} alt={`Banner ${banner.id}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="home">
        {/* 🔎 Search */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Type to search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="search-icon"
            onClick={() => dispatch({ type: "SET_SEARCH", payload: inputValue })}
          >
            🔍
          </button>
        </div>

        {/* 🎯 Filters */}
        <div className="filter-bar">
          <div className="filter-group">
            <label>Filter by Category:</label>
            <select
              value={filterState.category}
              onChange={(e) => dispatch({ type: "SET_CATEGORY", payload: e.target.value })}
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Filter by Price:</label>
            <select
              value={filterState.price}
              onChange={(e) => dispatch({ type: "SET_PRICE", payload: e.target.value })}
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

        {/* 🛍️ Products */}
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h2 className="category-title">{category}</h2>
            <div className="product-row">
              {items.map((product) => (
                <div className="product-card" key={product.id}>
                  <Link to={`/product/${product.id}`} className="product-card-link">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>₹{product.price}</p>
                  </Link>
                  <div className="buttons">
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
