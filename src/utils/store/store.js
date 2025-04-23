import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice';
import storeReducer from '../slices/storeSlice';
import sidebarReducer from '../slices/sidebarSlice';

const store = configureStore({
    reducer:{
        auth: authReducer,
        store: storeReducer,
        sidebar: sidebarReducer
    }
})

export default store;