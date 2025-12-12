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

    onSave: () => void;
    onHide: () => void;
    onMute: () => void;
    onRestrict: () => void;
    onBlock: () => void;
    onReport: () => void;
    onCopyLink: () => void;
    onEdit: () => void;
    onDelete: () => void;
};

export default function Options({
    postUserId,
    currentUserId,
    onSave,
    onHide,
    onMute,
    onRestrict,
    onBlock,
    onReport,
    onCopyLink,
    onEdit,
    onDelete,
}: OptionsProps) {
    const isOwner = currentUserId === postUserId;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="rounded-full" variant="ghost" size="icon-lg">
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
                        <DropdownMenuItem
                            className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium"
                            onClick={onSave}
                        >
                            Save/Unsave <Bookmark />
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium"
                            onClick={onHide}
                        >
                            Not interested <EyeOff />
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium"
                            onClick={onMute}
                        >
                            Mute <BellOff />
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium"
                            onClick={onRestrict}
                        >
                            Restrict <Shield />
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium text-red-500"
                            onClick={onBlock}
                        >
                            Block <Trash2 />
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium text-red-500"
                            onClick={onReport}
                        >
                            Report <Flag />
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium"
                            onClick={onCopyLink}
                        >
                            Copy link <Link />
                        </DropdownMenuItem>
                        {isOwner && (
                            <>
                                <DropdownMenuItem
                                    className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium"
                                    onClick={onEdit}
                                >
                                    Edit <Edit2 />
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium text-red-500"
                                    onClick={onDelete}
                                >
                                    Delete <Trash2 />
                                </DropdownMenuItem>
                            </>
                        )}
                    </>
                ) : (
                    <DropdownMenuItem
                        className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium"
                        onClick={onCopyLink}
                    >
                        Copy link <Link />
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
