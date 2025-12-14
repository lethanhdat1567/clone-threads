import { Separator } from "@/components/ui/separator";
import Comments from "@/pages/PostDetail/components/Comments";
import Filter from "@/pages/PostDetail/components/Filter";
import PostView from "@/pages/PostDetail/components/PostView";
import { postService, type Post } from "@/service/postService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
    const { postId } = useParams();
    const [post, setPost] = useState<Post>();
    const [comments, setComments] = useState<Post[]>([]);

    useEffect(() => {
        const http = async () => {
            if (!postId) return;
            try {
                const res = await postService.getSinglePost(Number(postId));
                if (res.data.parent_id) {
                    const replies = await postService.getReplies(
                        Number(postId),
                    );

                    setComments(replies.data);
                } else {
                    const replies = await postService.getSpendingReplies(
                        Number(postId),
                    );
                    setComments(replies.data);
                }
                setPost(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        http();
    }, [postId]);

    if (!post) return;

    return (
        <div>
            <div className="p-4">
                <PostView post={post} />
                {comments.length > 0 && <Filter />}
            </div>
            <Separator />
            <Comments comments={comments} />
        </div>
    );
}

export default PostDetail;
