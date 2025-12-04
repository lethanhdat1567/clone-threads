import Logo from "@/components/Logo";
import NavFooter from "@/layouts/DefaultLayout/components/NavFooter";
import NavList from "@/layouts/DefaultLayout/components/Sidebar/NavList";

function Sidebar() {
    return (
        <div className="w-(--sidebar-w) h-screen bg-neutral-950 flex flex-col justify-between items-center">
            <div className="pt-[15px]">
                <Logo />
            </div>
            <NavList />
            <NavFooter />
        </div>
    );
}

export default Sidebar;
