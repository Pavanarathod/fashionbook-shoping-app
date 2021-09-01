import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      state.items = [...state.items, action.payload];
    },
  },
});

export const productActions = productSlice.actions;

export const getProductData = (state) => state.products.items;

export default productSlice.reducer;
