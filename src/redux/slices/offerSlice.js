import { createSlice } from "@reduxjs/toolkit";

const offerSlice = createSlice({
  name: "offers",
  initialState: {
    banners: [
      { id: 1, image: "/assets/banner3.png" },
      { id: 2, image: "/assets/banner2.png" },
      { id: 3, image: "/assets/banner1.png" }
    ]
  },
  reducers: {
    addBanner: (state, action) => {
      state.banners.push(action.payload);
    },
    removeBanner: (state, action) => {
      state.banners = state.banners.filter(b => b.id !== action.payload);
    }
  }
});

export const { addBanner, removeBanner } = offerSlice.actions;
export default offerSlice.reducer;
