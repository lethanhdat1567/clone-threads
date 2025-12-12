import api from "@/lib/axios";

// Payload gửi lên API
export interface LoginPayload {
    login: string;
    password: string;
}

export interface RegisterPayload {
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
}

// Response từ API
export interface AuthResponse {
    success: boolean;
    message?: string;
    data?: any;
}

export interface ResetPassword {
    token: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export const authService = {
    register: async (payload: RegisterPayload) => {
        const res = await api.post("/auth/register", payload);
        return res.data;
    },

    login: async (payload: LoginPayload) => {
        const res = await api.post("/auth/login", payload);
        return res.data;
    },

    validateUsername: async (payload: { username: string }) => {
        const res = await api.post("/auth/validate/username", payload);
        return res.data;
    },

    validateEmail: async (payload: { email: string }) => {
        const res = await api.post("/auth/validate/email", payload);
        return res.data;
    },

    getUserInfo: async () => {
        const res = await api.get("/auth/user");
        return res.data;
    },

    refreshToken: async (data: { refresh_token: string }) => {
        const res = await api.post("/auth/refresh", data);
        return res.data;
    },

    forgotPassword: async (data: { email: string }) => {
        const res = await api.post("/auth/forgot-password", data);
        return res.data;
    },

    validateToken: async (token: string) => {
        const res = await api.get("/auth/reset-password/validate", {
            params: { token },
        });
        return res.data;
    },

    resetPassword: async (data: ResetPassword) => {
        const res = await api.post("/auth/reset-password", data);
        return res.data;
    },
};
