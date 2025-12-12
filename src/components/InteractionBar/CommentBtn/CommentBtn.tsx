import { Button } from "@/components/ui/button";
import type { Post } from "@/service/postService";
import { MessageCircle } from "lucide-react";

function CommentBtn({ post }: { post: Post }) {
    return (
        <Button
            variant={"ghost"}
            className="text-foreground rounded-xl text-sm font-thin"
        >
            <MessageCircle /> {post.replies_count}
        </Button>
    );
}

export default CommentBtn;
