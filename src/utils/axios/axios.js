import axios from "axios";
import platform from "platform";
import { BASE_URL, REFRESH_TOKEN_URL } from "./apiURL";
import store from "../store/store";
import { setTokens } from "../slices/authSlice";

const api = axios.create({
    baseURL: BASE_URL,
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        config.headers['Device'] = JSON.stringify({
            app: 'web',
            os: platform.os?.family || 'unknown',
            os_version: platform.os?.version || 'unknown',
            device: platform.product || 'unknown',
            device_type: /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
            ip_address: null,
            browser_name: platform.name || 'unknown',
            browser_version: platform.version || 'unknown',
        });
        const token = store.getState().auth.accessToken;
        if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const refreshToken = store.getState().auth.refreshToken;
            const response = await axios.post(REFRESH_TOKEN_URL, { 'refresh-token': refreshToken });
            console.log(response.data);
            const newAccessToken = response.data.authToken;
            store.dispatch(setTokens({ accessToken: newAccessToken }));
            localStorage.setItem('accessToken', newAccessToken);
            originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return api(originalRequest);
        } catch (refreshError) {
            store.dispatch(logout());
            console.error('Refresh token failed', refreshError);
        }
        }
        return Promise.reject(error);
    }
);

export default api;