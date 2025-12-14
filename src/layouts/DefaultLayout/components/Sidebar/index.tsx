import Logo from "@/components/Logo";
import NavFooter from "@/layouts/DefaultLayout/components/NavFooter";
import NavList from "@/layouts/DefaultLayout/components/Sidebar/NavList";

function Sidebar() {
    return (
        <div className="bg-background fixed bottom-0 left-0 z-50 flex h-16 w-full flex-row items-center justify-around border-t md:top-0 md:left-0 md:h-screen md:w-(--sidebar-w) md:flex-col md:justify-between md:border-t-0 md:border-r">
            {/* Logo: ẩn trên mobile */}
            <div className="hidden pt-3.75 md:block">
                <Logo />
            </div>

            <NavList />

            {/* Footer: ẩn trên mobile */}
            <div className="hidden md:block">
                <NavFooter />
            </div>
        </div>
    );
}

export default Sidebar;
