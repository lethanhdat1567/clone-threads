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
        <ul className="flex flex-col gap-1">
            {/* Render 2 item đầu */}
            {firstTwo.map((nav) => (
                <NavItem nav={nav} key={nav.title} />
            ))}

            {/* Button ở giữa */}
            {user ? (
                <li>
                    <PostModal
                        isCreatePost
                        open={openPostModal}
                        setOpen={setOpenPostModal}
                    >
                        <button className="bg-secondary text-muted-foreground hover:text-foreground flex h-12 w-15 cursor-pointer items-center justify-center rounded-lg">
                            <Plus size={25} />
                        </button>
                    </PostModal>
                </li>
            ) : (
                <li>
                    <DialogLogin>
                        <button className="bg-secondary text-muted-foreground hover:text-foreground flex h-12 w-15 cursor-pointer items-center justify-center rounded-lg">
                            <Plus size={25} />
                        </button>
                    </DialogLogin>
                </li>
            )}

            {/* Render các item còn lại */}
            {rest.map((nav) => (
                <NavItem nav={nav} key={nav.title} />
            ))}
        </ul>
    );
}

export default NavList;
