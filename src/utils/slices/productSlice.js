import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  stockProducts: localStorage.getItem('stockProducts') ? JSON.parse(localStorage.getItem('stockProducts')) : [],
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
      localStorage.setItem("stockProducts", JSON.stringify(state.stockProducts));
    },
    updatePricing: (state, action) => {
      const {
        productName,
        productMRP,
        discountType,
        discountValue,
        productPrice,
      } = action.payload;

      const productIndex = state.stockProducts.findIndex(
        (product) => product.productName === productName
      );

      if (productIndex >= 0) {
        // Update the selected product details
        state.stockProducts[productIndex] = {
          ...state.stockProducts[productIndex],
          productMRP,
          discountType,
          discountValue,
          productPrice,
        };
      }
      localStorage.setItem("stockProducts", JSON.stringify(state.stockProducts));
      state.selectedProduct = null;
    },
    updateavAvailability(state, action) {
      const { productName, availability } = action.payload;

      const updatedProducts = state.stockProducts.map((product) =>
        product.productName === productName
          ? { ...product, availability: availability }
          : product
      );
      state.stockProducts = updatedProducts;
      localStorage.setItem("stockProducts", JSON.stringify(state.stockProducts));
      state.selectedProduct = null;
    },
    updateQuantity(state, action) {
      const { productName, newStock } = action.payload;

      const updatedProducts = state.stockProducts.map((product) =>
        product.productName === productName
          ? {
              ...product,
              abailableQuantity:
                Number(product.abailableQuantity) + Number(newStock),
            }
          : product
      );
      state.stockProducts = updatedProducts;
      localStorage.setItem("stockProducts", JSON.stringify(state.stockProducts));
      // state.selectedProduct = null;
    },
    deleteQuantity(state, action) {
      const { productName, newStock } = action.payload;

      const updatedProducts = state.stockProducts.map((product) =>
        product.productName === productName
          ? {
              ...product,
              abailableQuantity:
                Number(product.abailableQuantity) - Number(newStock),
            }
          : product
      );
      state.stockProducts = updatedProducts;
      localStorage.setItem("stockProducts", JSON.stringify(state.stockProducts));
      // state.selectedProduct = null;
    },
    deleteStockProduct(state, action) {
      const updatedProducts = state.stockProducts.filter(
        (product) => product.productName !== action.payload
      );
      state.stockProducts = updatedProducts;
      localStorage.setItem("stockProducts", JSON.stringify(state.stockProducts));
      // state.selectedProduct = null;
    },
  },
});

export const {
  setProducts,
  selectProduct,
  addToStockProducts,
  updatePricing,
  updateavAvailability,
  updateQuantity,
  deleteQuantity,
  deleteStockProduct,
} = productSlice.actions;
export default productSlice.reducer;
