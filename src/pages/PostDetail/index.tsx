import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const http = async () => {
            if (!postId) return;
            setLoading(true);
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
            } finally {
                setLoading(false);
            }
        };

        http();
    }, [postId]);

    return loading ? (
        <div className="flex h-screen w-full items-center justify-center">
            <Spinner className="h-8 w-8" />
        </div>
    ) : (
        <div>
            <div className="p-4">
                <PostView post={post as Post} />
                {comments.length > 0 && <Filter />}
            </div>
            <Separator />
            <Comments comments={comments} />
        </div>
    );
}

export default PostDetail;
