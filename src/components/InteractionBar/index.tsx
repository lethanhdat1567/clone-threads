import DialogLogin from "@/components/DialogLogin";
import CommentBtn from "@/components/InteractionBar/CommentBtn/CommentBtn";
import LikeBtn from "@/components/InteractionBar/LikeBtn";
import RepostBtn from "@/components/InteractionBar/RepostBtn";
import ShareBtn from "@/components/InteractionBar/ShareBtn";
import type { Post } from "@/service/postService";

function InteractionBar({
    post,
    showMetrics = true,
}: {
    post: Post;
    showMetrics?: boolean;
}) {
    return (
        <div className="mt-3 flex items-center gap-2">
            <DialogLogin>
                <LikeBtn post={post} unsetCount={!showMetrics} />
            </DialogLogin>
            <DialogLogin>
                <CommentBtn post={post} unsetCount={!showMetrics} />
            </DialogLogin>
            <DialogLogin>
                <RepostBtn post={post} unsetCount={!showMetrics} />
            </DialogLogin>
            <DialogLogin>
                <ShareBtn post={post} unsetCount={!showMetrics} />
            </DialogLogin>
        </div>
    );
}

export default InteractionBar;
