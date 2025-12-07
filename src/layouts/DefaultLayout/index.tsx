import BodyContent from "@/layouts/DefaultLayout/components/BodyContent";
import HeadingTitle from "@/layouts/DefaultLayout/components/HeadingTitle";
import LoginPanel from "@/layouts/DefaultLayout/components/LoginPanel";
import Sidebar from "@/layouts/DefaultLayout/components/Sidebar";

function DefaultLayout() {
    return (
        <div className="items-start overflow-hidden">
            <Sidebar />
            <div className="text-foreground bg-accent flex h-screen flex-1 items-start justify-center gap-4 overflow-auto">
                <div className="w-[640px]">
                    <HeadingTitle />
                    <BodyContent />
                </div>
                <LoginPanel />
            </div>
        </div>
    );
}

export default DefaultLayout;
