import BodyContent from "@/layouts/DefaultLayout/components/BodyContent";
import HeadingTitle from "@/layouts/DefaultLayout/components/HeadingTitle";
import LoginPanel from "@/layouts/DefaultLayout/components/LoginPanel";
import Sidebar from "@/layouts/DefaultLayout/components/Sidebar";
import { useSelector } from "react-redux";

function DefaultLayout() {
    const user = useSelector((state: any) => state.auth.user);

    return (
        <div className="items-start overflow-hidden">
            <Sidebar />
            <div className="text-foreground bg-accent flex h-screen flex-1 items-start justify-center gap-4 overflow-auto">
                <div className="w-[640px]">
                    <HeadingTitle />
                    <BodyContent />
                </div>
                {!user && <LoginPanel />}
            </div>
        </div>
    );
}

export default DefaultLayout;
