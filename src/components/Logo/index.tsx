import { logoIcon } from "@/assets/icons/logo";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to={"/"}>
            <div className="w-8.5 cursor-pointer transition hover:scale-105">
                {logoIcon}
            </div>
        </Link>
    );
}

export default Logo;
