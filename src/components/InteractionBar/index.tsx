import DialogLogin from "@/components/DialogLogin";
import CommentBtn from "@/components/InteractionBar/CommentBtn/CommentBtn";
import LikeBtn from "@/components/InteractionBar/LikeBtn";
import RepostBtn from "@/components/InteractionBar/RepostBtn";
import ShareBtn from "@/components/InteractionBar/ShareBtn";
import type { Post } from "@/service/postService";
import { useSelector } from "react-redux";

function InteractionBar({
    post,
    showMetrics = true,
}: {
    post: Post;
    showMetrics?: boolean;
}) {
    const user = useSelector((state: any) => state.auth.user);

    return (
        <DialogLogin>
            <div
                className={`mt-1 -ml-3 flex items-center gap-2 ${!user && "pointer-events-none"}`}
            >
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
        </DialogLogin>
    );
}

export default InteractionBar;
