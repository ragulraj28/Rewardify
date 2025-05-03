import axios from "axios";
import { BASE_URL, REFRESH_TOKEN_URL } from "./apiURL";
import store from "../store/store";
import { logout, setOrganizationTokens } from "../slices/authSlice";

const api = axios.create({
    baseURL: BASE_URL,
});

// Device Info Helper
const getDeviceInfo = () => ({
    app: 'web',
    os: "Android",
    os_version: "6.0",
    device: "Nexus 5",
    device_type: "mobile",
    ip_address: null,
    browser_name: "Chrome Mobile",
    browser_version: "136.0.0.0",
});

// Request Interceptor
api.interceptors.request.use(
    (config) => {
               
        config.headers['Device'] = JSON.stringify(getDeviceInfo());

        const token = store.getState().auth.accessToken;
        if (token && token != "undefined" && !config.url.includes('/v1/store-user/auth/generateToken/')) {
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

        const refreshToken = store.getState().auth.refreshToken;
        
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if(originalRequest.url.includes('/v1/store-user/auth/generateToken/')) {                
                window.location.href = '/';
                store.dispatch(logout());
                return Promise.reject("No refresh token available for non organization user access token.");
            }

            if (!refreshToken) {                
                store.dispatch(logout());
                return Promise.reject("No refresh token available.");
            }

            try {
                const response = await axios.post(`${BASE_URL}${REFRESH_TOKEN_URL}`,{},{headers:{ 'refresh-token': `Bearer ${refreshToken}`}});
                
                const newAccessToken = response.data.token;                

                // Update tokens in store and localStorage
                store.dispatch(setOrganizationTokens({ accessToken: newAccessToken, refreshToken }));
                localStorage.setItem("accessToken", newAccessToken);

                // Retry original request with new access token
                const updatedRequest = {
                    ...originalRequest,
                    headers: {
                        ...originalRequest.headers,
                        Authorization: `Bearer ${newAccessToken}`,
                    },
                };

                return api(updatedRequest);

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