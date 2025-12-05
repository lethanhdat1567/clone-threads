import Logo from "@/components/Logo";
import NavFooter from "@/layouts/DefaultLayout/components/NavFooter";
import NavList from "@/layouts/DefaultLayout/components/Sidebar/NavList";

function Sidebar() {
  return (
    <div className="bg-background flex h-screen w-(--sidebar-w) flex-col items-center justify-between">
      <div className="pt-[15px]">
        <Logo />
      </div>
      <NavList />
      <NavFooter />
    </div>
  );
}

export default Sidebar;
