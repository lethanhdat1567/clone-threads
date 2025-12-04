import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DialogLogin from "@/components/DialogLogin";

interface NavItemProps {
    nav: {
        title: string;
        icon: React.ReactNode;
        href: string;
        isRequireAuth: boolean;
    };
}

function NavItem({ nav }: NavItemProps) {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const isActive =
        location.pathname === nav.href ||
        location.pathname.startsWith(nav.href + "/");

    const handleClick = (e: React.MouseEvent) => {
        if (nav.isRequireAuth) {
            e.preventDefault();
            setOpen(true);
        }
    };

    return (
        <>
            <li key={nav.title}>
                <Link
                    to={nav.href}
                    onClick={handleClick}
                    className={`${
                        isActive ? "bg-white/10 text-white" : "text-neutral-500"
                    } rounded-lg relative w-[60px] h-[60px] flex items-center justify-center group cursor-pointer`}
                >
                    {nav.icon}
                    <div
                        className={`${
                            isActive ? "hidden" : ""
                        } pointer-events-none top-1/2 scale-70 opacity-0 transition -translate-y-1/2 absolute w-full h-[85%] inset-0 bg-white/10 rounded-lg group-hover:scale-100 group-hover:opacity-100`}
                    />
                </Link>
            </li>

            <DialogLogin open={open} setOpen={setOpen} />
        </>
    );
}

export default NavItem;
