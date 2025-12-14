// components/post/PostCard.tsx
import { useState } from "react";
import { useSelector } from "react-redux";
import Options from "@/components/post/components/Options";
import Content from "@/components/post/components/Content";
import InteractionBar from "@/components/InteractionBar";
import UsernameTooltip from "@/components/UsernameTooltip";
import type { Post } from "@/service/postService";
import { formatTimeToHour } from "@/utils/timer";
import Avatar from "@/components/Avatar";

type PostCardProps = {
    post: Post;
    isReply?: boolean;
    className?: string;
};

function PostCard({ post, isReply }: PostCardProps) {
    const user = useSelector((state: any) => state.auth.user);
    const [localPost, setLocalPost] = useState<Post>(post);

    return (
        <div
            className={`grid grid-cols-12 ${!isReply && "border-b"} p-4 ${isReply ? "pb-0 pl-4" : ""}`}
        >
            {/* Avatar */}
            <div
                className={`col-span-1 ${isReply && "flex flex-col items-center justify-start"}`}
            >
                <Avatar
                    src={localPost.user?.avatar_url}
                    className={`mt-2 ${isReply ? "mt-0 h-8 w-8" : "h-10 w-10"}`}
                />
            </div>
            <div className={`col-span-11 ${isReply && "ml-2"} flex flex-col`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <UsernameTooltip
                            avatar={localPost.user?.avatar_url}
                            bio={localPost.user?.bio}
                            name={localPost.user?.name}
                            username={localPost.user?.username}
                        />
                        <span className="text-muted-foreground text-sm">
                            {formatTimeToHour(localPost.created_at)}
                        </span>
                    </div>
                    {!isReply && (
                        <div>
                            <Options
                                postUserId={localPost.user_id}
                                currentUserId={user?.id}
                            />
                        </div>
                    )}
                </div>
                <Content post={localPost} />
                {!isReply && <InteractionBar post={localPost} />}
            </div>
        </div>
    );
}

export default PostCard;
