import Avatar from "@/components/Avatar";
import InteractionBar from "@/components/InteractionBar";
import type { Post } from "@/service/postService";
import { formatTimeToHour } from "@/utils/timer";
import { cn } from "@/lib/utils";

function PostView({
    post,
    showMetrics,
    selectedTheme,
}: {
    post: Post;
    showMetrics: boolean;
    selectedTheme: string;
}) {
    const isDark = selectedTheme === "dark";

    return (
        <div
            className={cn(
                "pointer-events-none",
                isDark ? "text-white" : "text-black",
            )}
        >
            {/* Header */}
            <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9" />

                <h2
                    className={cn(
                        "text-sm font-medium",
                        isDark ? "text-white" : "text-black",
                    )}
                >
                    {post.user?.username}
                </h2>

                {showMetrics && (
                    <span
                        className={cn(
                            "text-sm",
                            isDark ? "text-gray-400" : "text-muted-foreground",
                        )}
                    >
                        {formatTimeToHour(post.created_at)}
                    </span>
                )}
            </div>

            {/* Content */}
            <div
                className={cn(
                    "my-3 text-sm whitespace-pre-wrap",
                    isDark ? "text-gray-100" : "text-gray-900",
                )}
            >
                {post.content}
            </div>

            {/* Interaction bar */}
            <InteractionBar post={post} showMetrics={showMetrics} />
        </div>
    );
}

export default PostView;
