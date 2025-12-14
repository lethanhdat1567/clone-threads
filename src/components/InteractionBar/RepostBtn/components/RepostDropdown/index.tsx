import PostModal from "@/components/post/components/PostModal";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Post } from "@/service/postService";
import { MessageSquareQuote, Repeat } from "lucide-react";
import { useState } from "react";

type Props = {
    children: React.ReactNode;
    onRepost: () => void;
    post: Post;
};

function RepostDropdown({ children, onRepost, post }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <>
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
                    <DropdownMenuItem
                        onClick={() => setOpen(true)}
                        className="flex cursor-pointer items-center justify-between rounded-lg py-4 text-sm font-semibold"
                    >
                        Quote <MessageSquareQuote color="black" />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <PostModal open={open} setOpen={setOpen} post={post} isQuote />
        </>
    );
}

export default RepostDropdown;
