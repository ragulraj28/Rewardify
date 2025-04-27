import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  stockProducts: [],
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    addToStockProducts: (state, action) => {
      state.stockProducts = [...state.stockProducts, action.payload];
    },
  },
});

export const { setProducts, selectProduct, addToStockProducts } =
  productSlice.actions;
export default productSlice.reducer;
