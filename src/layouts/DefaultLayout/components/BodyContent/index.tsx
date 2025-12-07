import { Outlet } from "react-router-dom";

function BodyContent() {
    return (
        <main className="bg-background min-h-[calc(100vh-var(--header-h))] border">
            <Outlet />
        </main>
    );
}

export default BodyContent;
