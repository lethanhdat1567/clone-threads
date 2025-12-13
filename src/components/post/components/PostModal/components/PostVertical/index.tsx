import UsernameTooltip from "@/components/UsernameTooltip";
import type { Post } from "@/service/postService";
import { formatTimeToHour } from "@/utils/timer";
import { ChevronRight } from "lucide-react";

function PostVertical({ post }: { post: Post }) {
    return (
        <div className="p-4">
            <div className="flex items-center gap-2">
                <UsernameTooltip
                    avatar={post.user?.avatar_url}
                    bio={post.user?.bio}
                    name={post.user?.name}
                    username={post.user?.username}
                />
                <ChevronRight size={14} />
                <span className="text-muted-foreground text-sm">
                    {formatTimeToHour(post.created_at)}
                </span>
            </div>
            <div className="text-sm">
                <p>
                    Các bạn sinh viên y cẩn thận nha. Thật sự thấy rất tội cho
                    bạn nữ kia luôn đấy Các bạn ơi đừng để vụ này chìm
                </p>
            </div>
        </div>
    );
}

export default PostVertical;
