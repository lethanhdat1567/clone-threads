import InteractionBar from "@/components/InteractionBar";
import Options from "@/components/post/components/Options";
import UsernameTooltip from "@/components/UsernameTooltip";
import AvatarModal from "@/pages/PostDetail/components/PostView/AvatarModal";
import { postService, type Post } from "@/service/postService";
import { formatTimeToHour } from "@/utils/timer";
import { useEffect, useState } from "react";

type Props = {
    post: Post;
    isRoot?: boolean;
};

function ReplyView({ post, isRoot }: Props) {
    const [postReplies, setPostReplies] = useState<Post[]>([]);

    useEffect(() => {
        const http = async () => {
            if (!post.id) return;
            try {
                const res = await postService.getReplies(Number(post.id));

                setPostReplies(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        http();
    }, [post.id]);

    if (!post) return;

    return (
        <div className={isRoot ? "border-b py-2" : ""}>
            <div className="grid grid-cols-12">
                <div className="col-span-1 mt-2 mr-4 flex flex-col items-center">
                    <AvatarModal post={post} />
                    {postReplies.length > 0 && (
                        <div className="bg-muted-foreground mt-2 w-0.75 flex-1"></div>
                    )}
                </div>
                <div className="col-span-11">
                    <div className="flex items-center justify-between">
                        <div className="flex items-start gap-3">
                            <UsernameTooltip
                                username={post.user?.username}
                                avatar={post.user?.avatar_url}
                                bio={post.user?.bio}
                                name={post.user?.name}
                            />
                            <span className="text-muted-foreground text-sm">
                                {formatTimeToHour(post.created_at)}
                            </span>
                        </div>
                        <Options postUserId={post.user?.id as number} />
                    </div>
                    <div className="text-sm">
                        <p>{post.content}</p>
                    </div>
                    <InteractionBar post={post} />
                </div>
            </div>
            {postReplies.map((comment) => (
                <div key={comment.id}>
                    <ReplyView post={comment} />
                </div>
            ))}
        </div>
    );
}

export default ReplyView;
