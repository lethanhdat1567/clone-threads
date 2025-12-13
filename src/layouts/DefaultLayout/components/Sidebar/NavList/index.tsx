import PostModal from "@/components/post/components/PostModal";
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
                <PostModal>
                    <button className="bg-secondary text-muted-foreground hover:text-foreground flex h-12 w-15 cursor-pointer items-center justify-center rounded-lg">
                        <Plus size={25} />
                    </button>
                </PostModal>
            </li>

            {/* Render các item còn lại */}
            {rest.map((nav) => (
                <NavItem nav={nav} key={nav.title} />
            ))}
        </ul>
    );
}

export default NavList;
