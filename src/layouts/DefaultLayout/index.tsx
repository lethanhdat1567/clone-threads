import BodyContent from "@/layouts/DefaultLayout/components/BodyContent";
import DetailHeading from "@/layouts/DefaultLayout/components/DetailHeading";
import HeadingTitle from "@/layouts/DefaultLayout/components/HeadingTitle";
import LoginPanel from "@/layouts/DefaultLayout/components/LoginPanel";
import Sidebar from "@/layouts/DefaultLayout/components/Sidebar";
import { useSelector } from "react-redux";
import { useMatch } from "react-router-dom";

function DefaultLayout() {
    const user = useSelector((state: any) => state.auth.user);
    const isPostDetail = useMatch("/:username/post/:postId");

    return (
        <div className="items-start overflow-hidden">
            <Sidebar />
            <div
                className="text-foreground bg-accent flex h-screen flex-1 items-start justify-center gap-4 overflow-auto"
                id="scrollableDiv"
            >
                <div className="w-160">
                    {isPostDetail ? <DetailHeading /> : <HeadingTitle />}
                    <BodyContent />
                </div>
                {!user && <LoginPanel />}
            </div>
        </div>
    );
}

export default DefaultLayout;
