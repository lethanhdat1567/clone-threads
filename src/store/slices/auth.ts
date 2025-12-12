import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: any | null;
    accessToken: string | null;
    refreshToken: string | null;
}

const initialState: AuthState = {
    user: JSON.parse(localStorage.getItem("user") || "null"),
    accessToken: localStorage.getItem("access_token"),
    refreshToken: localStorage.getItem("refresh_token"),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{
                accessToken: string;
                refreshToken: string;
            }>,
        ) => {
            const { accessToken, refreshToken } = action.payload;

            state.accessToken = accessToken;
            state.refreshToken = refreshToken;

            localStorage.setItem("access_token", accessToken);
            localStorage.setItem("refresh_token", refreshToken);
        },

        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },

        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;

            localStorage.removeItem("user");
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
        },
    },
});

export const { setCredentials, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
