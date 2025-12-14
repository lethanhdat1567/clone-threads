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
            <li key={nav.title} className="flex-1">
                <Link
                    to={nav.href}
                    onClick={handleClick}
                    className={`${
                        isActive
                            ? "bg-accent text-foreground"
                            : "text-muted-foreground"
                    } group hover:text-foreground relative z-10 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg md:h-15 md:w-15`}
                >
                    <span className="absolute z-50"> {nav.icon}</span>
                    <div
                        className={`${
                            isActive ? "hidden" : ""
                        } bg-accent pointer-events-none absolute inset-0 top-1/2 z-0 h-[85%] w-full -translate-y-1/2 scale-70 rounded-lg opacity-0 transition group-hover:scale-100 group-hover:opacity-100`}
                    />
                </Link>
            </li>

            <DialogLogin open={open} setOpen={setOpen} />
        </>
    );
}

export default NavItem;
