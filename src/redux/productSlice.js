import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "TShirt White",
      price: 499,
      image: "/assets/tshirt.png",
      description: "Comfortable cotton t-shirt",
      category: "Clothing"
    },
    {
      id: 2,
      name: "Nike Shadow | Dark Shoes",
      price: 1999,
      image: "/assets/shoes.png",
      description: "Stylish running shoes",
      category: "Footwear"
    },
    {
      id: 3,
      name: "Rolex Watch | Silver And Black",
      price: 2999,
      image: "/assets/watch.png",
      description: "Elegant wrist watch",
      category: "Accessories"
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 1799,
      image: "/assets/speaker.png",
      description: "Portable and powerful sound system.",
      category: "Electronics"
    },
    {
      id: 5,
      name: "Laptop Stand",
      price: 799,
      image: "/assets/stand.png",
      description: "Adjustable and durable stand for laptops.",
      category: "Accessories"
    },
    {
      id: 6,
      name: "Wireless Earbuds",
      price: 1499,
      image: "/assets/earbuds.png",
      description: "High-quality sound and long battery life.",
      category: "Electronics"
    },
    {
      id: 7,
      name: "I phone 15Pro | Silver White",
      price: 115999,
      image: "/assets/iphone15.png",
      description: "High-performance smartphone with AMOLED display.",
      category: "SmartPhone"
    },
    {
      id: 8,
      name: "One Plus Pad Go Tablet",
      price: 9999,
      image: "/assets/oneplus.png",
      description: "Portable tablet for work and entertainment.",
      category: "Electronics"
    },
    {
      id: 9,
      name: "Wireless Charger | IPhone, Apple watch",
      price: 1299,
      image: "/assets/charger.png",
      description: "Fast wireless charging pad for all devices.",
      category: "Electronics"
    },
    {
      id: 10,
      name: "Formal Black Pant",
      price: 999,
      image: "/assets/pant.png",
      description: "Comfortable cotton pants for everyday wear.",
      category: "Clothing"
    },
    {
      id: 11,
      name: "Formal Shoes | Black",
      price: 1499,
      image: "/assets/formals.png",
      description: "Elegant formal shoes perfect for office and events.",
      category: "Footwear"
    },
    {
      id: 12,
      name: "TShirt Green Casual Wear",
      price: 699,
      image: "/assets/Shirtg.png",
      description: "Comfortable cotton t-shirt",
      category: "Clothing"
    },
    {
      id: 13,
      name: "Nike Sneakers | White and Red ",
      price: 2499,
      image: "/assets/sneakers.png",
      description: "Comfortable everyday sneakers",
      category: "Footwear"
    },
    {
      id: 14,
      name: "Wireless Mouse White",
      price: 599,
      image: "/assets/mouse.png",
      description: "Ergonomic wireless mouse with long battery life.",
      category: "Accessories"
    },
    {
      id: 15,
      name: "Smartwatch Pro",
      price: 3499,
      image: "/assets/smartwatch.png",
      description: "Fitness tracking smartwatch with heart-rate and sleep monitor.",
      category: "Electronics"
    },
    {
      id: 16,
      name: "Realme 6 Pro | Navy Blue",
      price: 18999,
      image: "/assets/realme6pro.png",
      description: "Realme 6 Pro with Snapdragon 720G, 90Hz Display, 64MP Quad Camera",
      category: "SmartPhone"
    },
    {
      id: 17,
      name: "boAt Rockerz 450 Bluetooth Headphones",
      price: 1499,
      image: "/assets/boat_headphones.png",
      description: "boAt Rockerz 450 wireless headphones with 40mm drivers and 15H playtime.",
      category: "Electronics"
    },
    {
      id: 18,
      name: "iQOO Z9 5G | Brushed Green",
      price: 19999,
      image: "/assets/iqoo.png",
      description: "iQOO Z9 5G with Dimensity 7200, 120Hz AMOLED, 5000mAh battery",
      category: "SmartPhone"
    }
  ]
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // add reducers here if needed later
  }
});

export default productSlice.reducer;
