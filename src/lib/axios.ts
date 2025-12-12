import axios from "axios";
import { envConfig } from "@/config/env";
import { store } from "@/store";
import { setCredentials, logout } from "@/store/slices/auth";
import { authApi } from "@/https/auth";

const api = axios.create({
    baseURL: `${envConfig.apiUrl}/api`,
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (token) {
            prom.resolve(token);
        } else {
            prom.reject(error);
        }
    });

    failedQueue = [];
};

// 🔹 Attach access token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// 🔹 Handle responses and refresh token logic
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Không refresh cho login/register
        if (originalRequest.url.includes("auth/login")) {
            return Promise.reject(error);
        }

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const refreshToken = localStorage.getItem("refresh_token");

            if (!refreshToken) {
                store.dispatch(logout());
                window.location.href = "/login";
                return Promise.reject(error);
            }

            // Nếu có request đang refresh, xếp vào queue
            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({
                        resolve: (token: string) => {
                            originalRequest.headers.Authorization = `Bearer ${token}`;
                            resolve(api(originalRequest));
                        },
                        reject: (err: any) => reject(err),
                    });
                });
            }

            isRefreshing = true;

            try {
                const res = await authApi.refreshToken({
                    refresh_token: refreshToken,
                });

                const newAccess = res.data.access_token;
                const newRefresh = res.data.refresh_token;

                // Lưu token mới
                store.dispatch(
                    setCredentials({
                        accessToken: newAccess,
                        refreshToken: newRefresh,
                    }),
                );

                processQueue(null, newAccess);
                isRefreshing = false;

                // Gắn token mới rồi retry request
                originalRequest.headers.Authorization = `Bearer ${newAccess}`;
                return api(originalRequest);
            } catch (err) {
                processQueue(err, null);
                isRefreshing = false;

                store.dispatch(logout());
                window.location.href = "/login";
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    },
);

export default api;
