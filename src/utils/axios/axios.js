import axios from "axios";
import platform from "platform";
import { BASE_URL, REFRESH_TOKEN_URL } from "./apiURL";
import store from "../store/store";
import { setTokens, logout } from "../slices/authSlice";

const api = axios.create({
    baseURL: BASE_URL,
});

// Device Info Helper
const getDeviceInfo = () => ({
    app: 'web',
    os: platform.os?.family || 'unknown',
    os_version: platform.os?.version || 'unknown',
    device: platform.product || 'unknown',
    device_type: /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    ip_address: null,
    browser_name: platform.name || 'unknown',
    browser_version: platform.version || 'unknown',
});

// Request Interceptor
api.interceptors.request.use(
    (config) => {
        config.headers['Device'] = JSON.stringify(getDeviceInfo());

        const token = store.getState().auth.accessToken || localStorage.getItem("accessToken");
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const refreshToken = localStorage.getItem("refreshToken") || store.getState().auth.refreshToken;

            if (!refreshToken) {
                store.dispatch(logout());
                return Promise.reject(error);
            }

            try {
                const response = await axios.post(`${BASE_URL}${REFRESH_TOKEN_URL}`,{},{headers:{ 'refresh-token': `Bearer ${refreshToken}`}});

                const newAccessToken = response.data.authToken;

                // Update tokens in store and localStorage
                store.dispatch(setTokens({ accessToken: newAccessToken }));
                localStorage.setItem("accessToken", newAccessToken);

                // Retry original request with new access token
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return api(originalRequest);
            } catch (refreshError) {
                console.error("Refresh token failed", refreshError);
                store.dispatch(logout());
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;