import ShareDropdown from "@/components/InteractionBar/ShareBtn/ShareDropdown";
import { Button } from "@/components/ui/button";
import type { Post } from "@/service/postService";
import { Send } from "lucide-react";

function ShareBtn({ post }: { post: Post }) {
    return (
        <ShareDropdown post={post}>
            <Button
                variant={"ghost"}
                className="text-foreground rounded-xl text-sm font-thin"
            >
                <Send /> {post.reposts_and_quotes_count}
            </Button>
        </ShareDropdown>
    );
}

export default ShareBtn;
