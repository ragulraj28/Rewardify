// src/features/customer/customerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  name: '',
  phone: '',
  address: ''
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomer(state, action) {
      return { ...state, ...action.payload };
    },
    clearCustomer() {
      return initialState;
    }
  }
});

export const { setCustomer, clearCustomer } = customerSlice.actions;
export default customerSlice.reducer;
