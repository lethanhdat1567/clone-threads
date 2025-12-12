import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MessageSquareQuote, Repeat } from "lucide-react";

type Props = {
    children: React.ReactNode;
    onRepost: () => void;
};

function RepostDropdown({ children, onRepost }: Props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-55 rounded-2xl p-2"
                side="bottom"
                align="start"
            >
                <DropdownMenuItem
                    onClick={onRepost}
                    className="flex cursor-pointer items-center justify-between rounded-lg py-4 text-sm font-semibold"
                >
                    Repost <Repeat color="black" />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex cursor-pointer items-center justify-between rounded-lg py-4 text-sm font-semibold">
                    Quote <MessageSquareQuote color="black" />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default RepostDropdown;
