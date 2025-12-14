import ReplyView from "@/pages/PostDetail/components/ReplyView";
import { type Post } from "@/service/postService";

type Props = {
    comments: Post[];
};

function Comments({ comments }: Props) {
    if (comments.length <= 0) return;

    return (
        <div className="px-4">
            {comments.map((comment) => (
                <ReplyView post={comment} isRoot />
            ))}
        </div>
    );
}

export default Comments;
