import images from "@/assets/images";
import FooterList from "@/layouts/Auth/components/FooterList";
import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <div className="relative flex h-screen w-screen items-center justify-center overflow-x-hidden">
            <div className="absolute z-10">
                <Outlet />
            </div>
            <FooterList />
            <div className="absolute -top-20 h-100 w-375">
                <img
                    className="absolute h-full w-full"
                    src={images.authDecor}
                />
            </div>
        </div>
    );
}

export default AuthLayout;
