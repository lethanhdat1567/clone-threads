import { navData } from "@/layouts/DefaultLayout/components/Sidebar/NavList/data";
import NavItem from "@/layouts/DefaultLayout/components/Sidebar/NavList/NavItem";
import { Plus } from "lucide-react";

function NavList() {
    const firstTwo = navData.slice(0, 2);
    const rest = navData.slice(2);

    return (
        <ul className="flex flex-col gap-1">
            {/* Render 2 item đầu */}
            {firstTwo.map((nav) => (
                <NavItem nav={nav} key={nav.title} />
            ))}

            {/* Button ở giữa */}
            <li>
                <button className="w-[60px] h-12 bg-white/10 text-neutral-400 hover:text-neutral-100 cursor-pointer rounded-lg flex items-center justify-center">
                    <Plus size={25} />
                </button>
            </li>

            {/* Render các item còn lại */}
            {rest.map((nav) => (
                <NavItem nav={nav} key={nav.title} />
            ))}
        </ul>
    );
}

export default NavList;
