import Avatar from "@/components/Avatar";
import InteractionBar from "@/components/InteractionBar";
import ViewOnThreads from "@/components/ViewOnThreads";
import { postService, type Post } from "@/service/postService";
import { formatTimeToHour } from "@/utils/timer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Embed() {
    const [post, setPost] = useState<Post>();

    const { postId } = useParams();

    useEffect(() => {
        if (!postId) return;

        const http = async () => {
            try {
                const res = await postService.getSinglePost(Number(postId));
                setPost(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        http();
    }, []);

    if (!post) {
        return (
            <div className="text-muted-foreground p-4 text-center">
                Loading…
            </div>
        );
    }

    return (
        <div className="rounded-xl border p-4 shadow">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10" />
                    <h2 className="text-sm font-semibold">{post.user?.name}</h2>
                </div>
                <span className="text-muted-foreground text-md">
                    {formatTimeToHour(post.created_at)}
                </span>
            </div>
            <div className="mt-2">
                <p>{post.content}</p>
            </div>
            <div>
                <InteractionBar post={post} />
            </div>
            <ViewOnThreads to={`/${post.user?.username}/post/${post.id}`} />
        </div>
    );
}

export default Embed;
