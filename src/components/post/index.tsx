// components/post/PostCard.tsx
import { useSelector } from "react-redux";
import Options from "@/components/post/components/Options";
import Content from "@/components/post/components/Content";
import InteractionBar from "@/components/InteractionBar";
import UsernameTooltip from "@/components/UsernameTooltip";
import type { Post } from "@/service/postService";
import { formatTimeToHour } from "@/utils/timer";
import { useNavigate } from "react-router-dom";
import AvatarModal from "@/pages/PostDetail/components/PostView/AvatarModal";

type PostCardProps = {
    post: Post;
    isReply?: boolean;
    className?: string;
};

function PostCard({ post, isReply }: PostCardProps) {
    const user = useSelector((state: any) => state.auth.user);
    const navigate = useNavigate();

    function handleNavigate() {
        navigate(`/${post.user?.username}/post/${post.id}`);
    }

    return (
        <div
            className={`relative z-10 grid grid-cols-12 ${!isReply && "border-b"} p-4 ${isReply ? "pb-0 pl-4" : ""}`}
        >
            {/* Avatar */}
            <div
                className={`col-span-1 ${isReply ? "flex flex-col items-center justify-start" : ""}`}
            >
                <AvatarModal
                    className={`z-20 mt-2 ${isReply ? "mt-0 h-8 w-8" : "h-10 w-10"}`}
                    post={post}
                />
            </div>
            <div
                className={`col-span-11 ${isReply && "ml-2"} ml-4 flex flex-col sm:ml-0`}
            >
                <div className="flex items-center justify-between">
                    <div className="z-20 flex items-center gap-2">
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
                    {!isReply && (
                        <div className="z-20">
                            <Options
                                postUserId={post.user_id}
                                currentUserId={user?.id}
                                postId={post.id}
                            />
                        </div>
                    )}
                </div>
                <Content post={post} />
                {!isReply && (
                    <div className="z-20">
                        <InteractionBar post={post} />
                    </div>
                )}
            </div>
            <div
                className="isnet-0 absolute z-0 h-full w-full cursor-pointer bg-transparent"
                onClick={handleNavigate}
            ></div>
        </div>
    );
}

export default PostCard;
