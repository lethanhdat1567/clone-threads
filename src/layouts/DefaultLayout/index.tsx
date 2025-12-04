import HeadingTitle from "@/layouts/DefaultLayout/components/HeadingTitle";
import LoginPanel from "@/layouts/DefaultLayout/components/LoginPanel";
import Sidebar from "@/layouts/DefaultLayout/components/Sidebar";

function DefaultLayout() {
    return (
        <div className="flex items-start text-background">
            <Sidebar />
            <div className="bg-neutral-900 flex-1 min-h-screen overflow-auto  flex items-start justify-center">
                <div className="w-[640px]">
                    <HeadingTitle />
                    <div className="min-h-[calc(100vh-var(--header-h))]">
                        Body Content
                    </div>
                </div>
                <LoginPanel />
            </div>
        </div>
    );
}

export default DefaultLayout;
