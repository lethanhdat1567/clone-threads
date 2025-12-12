import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/index.tsx";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@/styles/global.scss";
import "./App.css";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")!).render(
    // <StrictMode>
    <Provider store={store}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
            <Toaster />
        </ThemeProvider>
    </Provider>,
    // </StrictMode>,
);
