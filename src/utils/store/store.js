import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import storeReducer from "../slices/storeSlice";
import sidebarReducer from "../slices/sidebarSlice";
import productReducer from "../slices/productSlice";
import customerReducer from '../slices/customerSlice';
import ordersReducer from '../slices/ordersSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    store: storeReducer,
    sidebar: sidebarReducer,
    customer: customerReducer,
    orders: ordersReducer,
    products: productReducer,
  },
});

export default store;

