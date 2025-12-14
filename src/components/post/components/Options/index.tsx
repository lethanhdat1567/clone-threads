import { useState } from "react";
import { toast } from "sonner";
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
import { postService } from "@/service/postService";

type OptionsProps = {
    postId: number;
    postUserId: number;
    currentUserId?: number;
};

export default function Options({
    postId,
    postUserId,
    currentUserId,
}: OptionsProps) {
    const isOwner = currentUserId === postUserId;

    const [isSaved, setIsSaved] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    // Save / Unsave
    const handleSavePost = async () => {
        const prev = isSaved;
        setIsSaved(!prev);

        try {
            const res = await postService.savePost(postId);
            setIsSaved(res?.data?.is_saved ?? !prev);
            toast.success(res?.data?.is_saved ? "Saved post" : "Unsaved post");
        } catch (err: any) {
            console.log(err);

            setIsSaved(prev);
            toast.error("Failed to save post");
        }
    };

    // Hide post
    const handleHidePost = async () => {
        const prev = isHidden;
        setIsHidden(true);

        try {
            await postService.hidePost(postId);
            toast.success("We'll show you fewer posts like this");
        } catch (err: any) {
            console.log(err);

            setIsHidden(prev);
            toast.error("Failed to hide post");
        }
    };

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
                        {/* SAVE */}
                        <DropdownMenuItem
                            onClick={handleSavePost}
                            className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium"
                        >
                            {isSaved ? "Unsave" : "Save"}
                            <Bookmark
                                className={isSaved ? "fill-current" : ""}
                            />
                        </DropdownMenuItem>

                        {/* HIDE */}
                        <DropdownMenuItem
                            onClick={handleHidePost}
                            className="flex cursor-pointer items-center justify-between rounded-lg p-2 py-4 text-sm font-medium"
                        >
                            Not interested <EyeOff />
                        </DropdownMenuItem>

                        <DropdownMenuItem className="flex items-center justify-between rounded-lg p-2 py-4 text-sm font-medium">
                            Mute <BellOff />
                        </DropdownMenuItem>

                        <DropdownMenuItem className="flex items-center justify-between rounded-lg p-2 py-4 text-sm font-medium">
                            Restrict <Shield />
                        </DropdownMenuItem>

                        <DropdownMenuItem className="flex items-center justify-between rounded-lg p-2 py-4 text-sm font-medium text-red-500">
                            Block <Trash2 />
                        </DropdownMenuItem>

                        <DropdownMenuItem className="flex items-center justify-between rounded-lg p-2 py-4 text-sm font-medium text-red-500">
                            Report <Flag />
                        </DropdownMenuItem>

                        <DropdownMenuItem className="flex items-center justify-between rounded-lg p-2 py-4 text-sm font-medium">
                            Copy link <Link />
                        </DropdownMenuItem>

                        {isOwner && (
                            <>
                                <DropdownMenuItem className="flex items-center justify-between rounded-lg p-2 py-4 text-sm font-medium">
                                    Edit <Edit2 />
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center justify-between rounded-lg p-2 py-4 text-sm font-medium text-red-500">
                                    Delete <Trash2 />
                                </DropdownMenuItem>
                            </>
                        )}
                    </>
                ) : (
                    <DropdownMenuItem className="flex items-center justify-between rounded-lg p-2 py-4 text-sm font-medium">
                        Copy link <Link />
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
