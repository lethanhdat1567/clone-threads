import DialogLogin from "@/components/DialogLogin";
import CommentBtn from "@/components/InteractionBar/CommentBtn/CommentBtn";
import LikeBtn from "@/components/InteractionBar/LikeBtn";
import RepostBtn from "@/components/InteractionBar/RepostBtn";
import ShareBtn from "@/components/InteractionBar/ShareBtn";
import type { Post } from "@/https/post";

function InteractionBar({ post }: { post: Post }) {
    return (
        <div className="mt-3 flex items-center gap-2">
            <DialogLogin>
                <LikeBtn postCount={post.likes_count} postId={post.id} />
            </DialogLogin>
            <DialogLogin>
                <CommentBtn />
            </DialogLogin>
            <DialogLogin>
                <RepostBtn />
            </DialogLogin>
            <DialogLogin>
                <ShareBtn />
            </DialogLogin>
        </div>
    );
}

export default InteractionBar;
