// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'; 
import offerReducer from "./slices/offerSlice";

export const store = configureStore({
  reducer: {
    product: productReducer, 
    offers: offerReducer
  },
});
