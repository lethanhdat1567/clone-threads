import DialogLogin from "@/components/DialogLogin";
import PostModal from "@/components/post/components/PostModal";
import { navData } from "@/layouts/DefaultLayout/components/Sidebar/NavList/data";
import NavItem from "@/layouts/DefaultLayout/components/Sidebar/NavList/NavItem";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

function NavList() {
    const firstTwo = navData.slice(0, 2);
    const rest = navData.slice(2);
    const [openPostModal, setOpenPostModal] = useState(false);
    const user = useSelector((state: any) => state.auth.user);

    return (
        <ul className="flex w-full items-center justify-between gap-1 md:flex-col md:justify-start md:gap-2">
            {/* 2 item đầu */}
            {firstTwo.map((nav) => (
                <NavItem nav={nav} key={nav.title} />
            ))}

            {/* Button + ở giữa */}
            <li className="flex-1 md:my-4">
                {user ? (
                    <PostModal
                        isCreatePost
                        open={openPostModal}
                        setOpen={setOpenPostModal}
                    >
                        <button className="bg-secondary text-muted-foreground hover:text-foreground flex h-12 w-full cursor-pointer items-center justify-center rounded-lg md:w-12">
                            <Plus size={25} />
                        </button>
                    </PostModal>
                ) : (
                    <DialogLogin>
                        <button className="bg-secondary text-muted-foreground hover:text-foreground flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg">
                            <Plus size={25} />
                        </button>
                    </DialogLogin>
                )}
            </li>

            {/* Các item còn lại */}
            {rest.map((nav) => (
                <NavItem nav={nav} key={nav.title} />
            ))}
        </ul>
    );
}

export default NavList;
