import { logoIcon } from "@/assets/icons/logo";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to={"/"}>
            <div className="w-[34px] hover:scale-105 transition cursor-pointer">
                {logoIcon}
            </div>
        </Link>
    );
}

export default Logo;
