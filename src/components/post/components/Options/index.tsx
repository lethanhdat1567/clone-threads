import {
    Ellipsis,
    Link,
    Bookmark,
    EyeOff,
    BellOff,
    Shield,
    Trash2,
    Flag,
    Edit2,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type OptionsProps = {
    postUserId: number;
    currentUserId?: number;
};

export default function Options({ postUserId, currentUserId }: OptionsProps) {
    const isOwner = currentUserId === postUserId;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="rounded-full" variant="ghost" size="icon-sm">
                    <Ellipsis />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="w-60 rounded-xl"
                side="bottom"
                align="end"
            >
                {currentUserId ? (
                    <>
                        <DropdownMenuItem className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium">
                            Save/Unsave <Bookmark />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium">
                            Not interested <EyeOff />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium">
                            Mute <BellOff />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium">
                            Restrict <Shield />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium text-red-500">
                            Block <Trash2 />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium text-red-500">
                            Report <Flag />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium">
                            Copy link <Link />
                        </DropdownMenuItem>
                        {isOwner && (
                            <>
                                <DropdownMenuItem className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium">
                                    Edit <Edit2 />
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium text-red-500">
                                    Delete <Trash2 />
                                </DropdownMenuItem>
                            </>
                        )}
                    </>
                ) : (
                    <DropdownMenuItem className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium">
                        Copy link <Link />
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
