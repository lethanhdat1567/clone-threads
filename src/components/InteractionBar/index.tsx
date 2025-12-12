import DialogLogin from "@/components/DialogLogin";
import CommentBtn from "@/components/InteractionBar/CommentBtn/CommentBtn";
import LikeBtn from "@/components/InteractionBar/LikeBtn";
import RepostBtn from "@/components/InteractionBar/RepostBtn";
import ShareBtn from "@/components/InteractionBar/ShareBtn";
import type { Post } from "@/service/postService";

function InteractionBar({ post }: { post: Post }) {
    return (
        <div className="mt-3 flex items-center gap-2">
            <DialogLogin>
                <LikeBtn post={post} />
            </DialogLogin>
            <DialogLogin>
                <CommentBtn post={post} />
            </DialogLogin>
            <DialogLogin>
                <RepostBtn post={post} />
            </DialogLogin>
            <DialogLogin>
                <ShareBtn post={post} />
            </DialogLogin>
        </div>
    );
}

export default InteractionBar;
