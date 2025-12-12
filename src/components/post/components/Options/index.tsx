import { Ellipsis, Link } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

function Options() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="rounded-full"
                    variant={"ghost"}
                    size={"icon-lg"}
                >
                    <Ellipsis />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-50 rounded-xl"
                side="bottom"
                align="end"
            >
                <DropdownMenuItem className="text-md flex cursor-pointer items-center justify-between rounded-xl p-2 font-medium">
                    Copy link <Link size={26} />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Options;
