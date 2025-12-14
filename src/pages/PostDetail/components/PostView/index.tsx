import InteractionBar from "@/components/InteractionBar";
import Options from "@/components/post/components/Options";
import UsernameTooltip from "@/components/UsernameTooltip";
import AvatarModal from "@/pages/PostDetail/components/PostView/AvatarModal";
import ReplyView from "@/pages/PostDetail/components/ReplyView";
import { postService, type Post } from "@/service/postService";
import { formatTimeToHour } from "@/utils/timer";
import { useEffect, useState } from "react";

type Props = {
    post: Post;
};

function PostView({ post }: Props) {
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
    }, []);

    if (!post) return;

    return (
        <div>
            <div>
                <div className="flex items-center justify-between">
                    <div className="mb-2 flex items-center gap-3">
                        <AvatarModal post={post} />
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
            {postReplies.map((comment) => (
                <div className="p-4 pl-0" key={comment.id}>
                    <ReplyView post={comment} />
                </div>
            ))}
        </div>
    );
}

export default PostView;
