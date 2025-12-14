import More from "@/layouts/DefaultLayout/components/NavFooter/components/More";
import Pin from "@/layouts/DefaultLayout/components/NavFooter/components/Pin";
import { useSelector } from "react-redux";

function NavFooter() {
    const user = useSelector((state: any) => state.auth.user);

    return (
        <ul className="flex flex-col gap-1 pb-3.75">
            {!user && <Pin />}
            <More />
        </ul>
    );
}

export default NavFooter;
