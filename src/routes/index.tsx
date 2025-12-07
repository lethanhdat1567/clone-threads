import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import DefaultLayout from "@/layouts/DefaultLayout";
import AuthLayout from "@/layouts/Auth";
import Login from "@/pages/Login";

export const router = createBrowserRouter([
    // DefaultLayout
    {
        path: "/",
        element: <DefaultLayout />,
        children: [{ index: true, element: <Home /> }],
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [{ path: "/login", element: <Login /> }],
    },
    // Not found
    {
        path: "*",
        element: <NotFound />,
    },
]);
