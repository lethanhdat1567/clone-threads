import { Heart, House, Search, User } from "lucide-react";

export const navData = [
    {
        title: "Home",
        icon: <House size={25} />,
        href: "/",
        isRequireAuth: false,
    },
    {
        title: "Search",
        icon: <Search size={25} />,
        href: "/search",
        isRequireAuth: false,
    },
    {
        title: "Notifications",
        icon: <Heart size={25} />,
        href: "/notifications",
        isRequireAuth: true,
    },
    {
        title: "Profile",
        icon: <User size={25} />,
        href: "/profile",
        isRequireAuth: true,
    },
];
