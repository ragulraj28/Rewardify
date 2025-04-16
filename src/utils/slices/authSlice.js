import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
    isOrganizationUser : JSON.parse(localStorage.getItem('isOrganizationUser')) || false,
    stores : JSON.parse(localStorage.getItem('stores')) || [],
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setTokens: (state, action) => {
            const { accessToken, refreshToken, isOrganizationUser, stores } = action.payload;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
            state.isOrganizationUser = isOrganizationUser;
            state.stores = stores;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('isOrganizationUser', JSON.stringify(isOrganizationUser));
            localStorage.setItem('stores', JSON.stringify(stores));
        },

        // setUser: (state, action) => {
        //     state.user = action.payload;
        //     localStorage.setItem('user', JSON.stringify(action.payload));
        // },

        logout: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            //state.user = null;
            localStorage.clear();
        }
    }
});

export const { setTokens, logout } = authSlice.actions;
export default authSlice.reducer;