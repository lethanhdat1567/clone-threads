import Avatar from "@/components/Avatar";
import InteractionBar from "@/components/InteractionBar";
import type { Post } from "@/service/postService";
import { formatTimeToHour } from "@/utils/timer";

function PostView({ post, showMetrics }: { post: Post; showMetrics: boolean }) {
    return (
        <div className="pointer-events-none">
            <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9" />{" "}
                <h2 className="text-sm font-medium">{post.user?.username}</h2>
                {showMetrics && (
                    <span className="text-muted-foreground text-sm">
                        {formatTimeToHour(post.created_at)}
                    </span>
                )}
            </div>
            <div className="my-3 text-sm">
                <p>{post.content}</p>
            </div>

            <InteractionBar post={post} showMetrics={showMetrics} />
        </div>
    );
}

export default PostView;
