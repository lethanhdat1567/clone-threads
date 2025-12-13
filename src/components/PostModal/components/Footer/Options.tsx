import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";

import { SlidersVertical } from "lucide-react";

function Options() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <button className="text-muted-foreground flex cursor-pointer items-center gap-2 text-[14px] font-semibold">
                    <SlidersVertical size={16} />
                    Reply options
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Who can reply and quote</DropdownMenuLabel>
                <DropdownMenuItem>Anyone</DropdownMenuItem>
                <DropdownMenuItem>Your followers</DropdownMenuItem>
                <DropdownMenuItem>Profiles you follow</DropdownMenuItem>
                <DropdownMenuItem>Profiles you mention</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Review and approve replies
                    <Switch />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Options;
