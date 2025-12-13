import { Outlet } from "react-router-dom";

function EmbedLayout() {
    return (
        <main className="flex min-h-screen w-full justify-center bg-white p-4">
            <div className="w-full max-w-xl">
                <Outlet />
            </div>
        </main>
    );
}

export default EmbedLayout;
