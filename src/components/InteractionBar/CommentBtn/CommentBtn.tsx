import PostModal from "@/components/post/components/PostModal";
import { Button } from "@/components/ui/button";
import type { Post } from "@/service/postService";
import { MessageCircle } from "lucide-react";

function CommentBtn({ post }: { post: Post }) {
    return (
        <PostModal isReply post={post}>
            <Button
                variant={"ghost"}
                className="text-foreground rounded-xl text-sm font-thin"
            >
                <MessageCircle /> {post.replies_count}
            </Button>
        </PostModal>
    );
}

export default CommentBtn;
