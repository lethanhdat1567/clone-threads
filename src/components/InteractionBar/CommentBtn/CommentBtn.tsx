import PostModal from "@/components/post/components/PostModal";
import { Button } from "@/components/ui/button";
import type { Post } from "@/service/postService";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

function CommentBtn({
    post,
    unsetCount,
}: {
    post: Post;
    unsetCount?: boolean;
}) {
    const [openReplyModal, setOpenReplyModal] = useState(false);

    return (
        <PostModal
            isReply
            post={post}
            parentId={post.id}
            open={openReplyModal}
            setOpen={setOpenReplyModal}
        >
            <Button
                variant={"ghost"}
                className="text-foreground rounded-xl text-sm font-thin"
            >
                <MessageCircle /> {!unsetCount && post.replies_count}
            </Button>
        </PostModal>
    );
}

export default CommentBtn;
