import { CircleEllipsis } from "lucide-react";

function Header() {
    return (
        <div className="flex items-center justify-between border-b px-6 py-4">
            <div className="text-md cursor-pointer">Cancel</div>
            <h2 className="text-md font-semibold">New Thread</h2>
            <button>
                <CircleEllipsis />
            </button>
        </div>
    );
}

export default Header;
