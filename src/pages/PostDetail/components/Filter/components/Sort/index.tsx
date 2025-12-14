import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Check } from "lucide-react";

function Sort() {
    const [sort, setSort] = useState<"top" | "recent">("top");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1 text-sm font-semibold">
                {sort === "top" ? "Top" : "Recent"} <ChevronDown size={14} />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-40" align="start">
                <DropdownMenuItem
                    className="flex items-center justify-between py-2 text-sm font-semibold"
                    onClick={() => setSort("top")}
                >
                    Top
                    {sort === "top" && <Check size={16} />}
                </DropdownMenuItem>

                <DropdownMenuItem
                    className="flex items-center justify-between py-2 text-sm font-semibold"
                    onClick={() => setSort("recent")}
                >
                    Recent
                    {sort === "recent" && <Check size={16} />}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Sort;
