import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
    isOrganizationUser : JSON.parse(localStorage.getItem('isOrganizationUser')),
    stores : JSON.parse(localStorage.getItem('stores')) || [],
    user: null,
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

        setUser: (state, action) => {            
            state.user = action.payload;
        },

        setOrganizationTokens: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            localStorage.setItem('accessToken', action.payload.accessToken);
            localStorage.setItem('refreshToken', action.payload.refreshToken);
        },

        logout: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        }
    }
});

export const { setTokens, setUser, setOrganizationTokens, logout } = authSlice.actions;
export default authSlice.reducer;