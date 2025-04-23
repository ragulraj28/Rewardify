import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedStore: JSON.parse(localStorage.getItem('selectedStore')) || null,
}

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setStore: (state, action) => {
            state.selectedStore = action.payload;
            localStorage.setItem('selectedStore', JSON.stringify(action.payload));
        }
    }
});

export const { setStore } = storeSlice.actions;
export default storeSlice.reducer;