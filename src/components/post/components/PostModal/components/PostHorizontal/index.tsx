import Avatar from "@/components/Avatar";
import UsernameTooltip from "@/components/UsernameTooltip";
import type { Post } from "@/service/postService";
import { formatTimeToHour } from "@/utils/timer";

function PostHorizontal({ post }: { post: Post }) {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-1 flex flex-col items-center justify-start">
                <Avatar className="h-10 w-10" />
                <div className="mt-4 h-full w-0.75 flex-1 bg-[#ccc]"></div>
            </div>
            <div className="col-span-11 ml-2">
                <div className="flex items-center gap-4">
                    <UsernameTooltip
                        avatar={post.user?.avatar_url}
                        bio={post.user?.bio}
                        name={post.user?.name}
                        username={post.user?.username}
                    />
                    <span className="text-muted-foreground text-sm">
                        {formatTimeToHour(post.created_at)}
                    </span>
                </div>
                <div className="w-full text-sm">
                    <p>
                        Các bạn sinh viên y cẩn thận nha. Thật sự thấy rất tội
                        cho bạn nữ kia luôn đấy Các bạn ơi đừng để vụ này chìm
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PostHorizontal;
