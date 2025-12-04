import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import DefaultLayout from "@/layouts/DefaultLayout";

export const router = createBrowserRouter([
    // DefaultLayout
    {
        path: "/",
        element: <DefaultLayout />,
        children: [{ index: true, element: <Home /> }],
    },
    // Not found
    {
        path: "*",
        element: <NotFound />,
    },
]);
