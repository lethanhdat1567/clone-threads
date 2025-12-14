import { Outlet } from "react-router-dom";

function EmbedLayout() {
    return (
        <main className="flex min-h-screen w-full justify-center bg-white">
            <div className="w-full">
                <Outlet />
            </div>
        </main>
    );
}

export default EmbedLayout;
