import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import DefaultLayout from "@/layouts/DefaultLayout";
import AuthLayout from "@/layouts/Auth";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ForgotPassword from "@/pages/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword";
import Search from "@/pages/Search";
import Activity from "@/pages/Activity";
import Profile from "@/pages/Profile";
import Embed from "@/pages/Embed";
import EmbedLayout from "@/layouts/EmbedLayout";
import VerifyEmail from "@/pages/VerifyEmail";
import PostDetail from "@/pages/PostDetail";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter(
    [
        // DefaultLayout
        {
            path: "/",
            element: <DefaultLayout />,
            children: [
                { index: true, element: <Home /> },
                { path: "/search", element: <Search /> },
                { path: "/activity", element: <Activity /> },
                { path: "/profile", element: <Profile /> },
                { path: "/:username/post/:postId", element: <PostDetail /> },
            ],
        },
        {
            path: "/",
            element: <AuthLayout />,
            children: [
                { path: "/login", element: <Login /> },
                { path: "/register", element: <Register /> },
                { path: "/forgot-password", element: <ForgotPassword /> },
                { path: "/reset-password", element: <ResetPassword /> },
                { path: "/verify-email", element: <VerifyEmail /> },
            ],
        },

        {
            path: "/",
            element: <EmbedLayout />,
            children: [
                { path: "/:username/post/:postId/embed", element: <Embed /> },
            ],
        },
        // Not found
        {
            path: "*",
            element: <NotFound />,
        },
    ],
    {
        basename: "/clone-threads",
    },
);
