import { createSlice } from "@reduxjs/toolkit";

const organizationUser = localStorage.getItem("isOrganizationUser");
const stores = localStorage.getItem("stores");

const initialState = {
  initialAccessToken: localStorage.getItem("initialAccessToken"),
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  isOrganizationUser:
    organizationUser != "undefined" && JSON.parse(organizationUser),
  stores: (stores != "undefined" && JSON.parse(stores)) || [],
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (state, action) => {
      const { token, refreshToken, isOrganizationUser, stores } =
        action.payload;
      state.accessToken = token;
      state.refreshToken = refreshToken;
      state.isOrganizationUser = isOrganizationUser;
      state.stores = stores;
      localStorage.setItem("initialAccessToken", token);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem(
        "isOrganizationUser",
        JSON.stringify(isOrganizationUser)
      );
      localStorage.setItem("stores", JSON.stringify(stores));
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    setOrganizationTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    },

        logout: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            localStorage.clear();
            state.initialAccessToken = null;
            state.stores = null;
            state.isOrganizationUser = null;
        },
    }
});

export const { setTokens, setUser, setOrganizationTokens, logout } =
  authSlice.actions;
export default authSlice.reducer;
