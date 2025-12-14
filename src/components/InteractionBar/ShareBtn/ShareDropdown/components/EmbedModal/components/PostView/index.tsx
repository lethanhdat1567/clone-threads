import images from "@/assets/images";
import Avatar from "@/components/Avatar";
import InteractionBar from "@/components/InteractionBar";
import { Button } from "@/components/ui/button";
import type { Post } from "@/service/postService";
import { formatTimeToHour } from "@/utils/timer";

function PostView({ post }: { post: Post }) {
    return (
        <div className="p-6 pb-4">
            <div className="rounded-xl border p-4">
                {/* User header */}
                <div className="mb-3 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar src={post.user?.avatar_url} />
                        <span className="text-[15px] font-semibold">
                            {post.user?.username || "username"}
                        </span>
                    </div>
                    <span className="text-sm text-gray-500">
                        {formatTimeToHour(post.created_at)}
                    </span>
                </div>

                {/* Post content */}
                <div className="mb-4 text-[15px] leading-5">
                    {post.content || "Test 1"}
                </div>

                {/* Interaction buttons */}
                <div className="pointer-events-none">
                    <InteractionBar post={post} />
                </div>
                <div className="flex items-end">
                    <Button variant={"secondary"} className="ml-auto text-xs">
                        View on Threads{" "}
                        <img src={images.threads} className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PostView;
