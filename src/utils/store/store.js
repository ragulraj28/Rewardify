import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import storeReducer from "../slices/storeSlice";
import sidebarReducer from "../slices/sidebarSlice";
import productReducer from "../slices/productSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    store: storeReducer,
    sidebar: sidebarReducer,
    products: productReducer,
  },
});

export default store;
