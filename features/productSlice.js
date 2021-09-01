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

    remooveItem(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newItems = [...state.items];

      if (index >= 0) {
        // items exists
        newItems.splice(index, 1);
      }

      state.items = newItems;
    },
  },
});

export const productActions = productSlice.actions;

export const getProductData = (state) => state.products.items;

export default productSlice.reducer;
