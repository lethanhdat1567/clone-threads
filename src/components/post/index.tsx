import Options from "@/components/post/components/Options";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Content from "@/components/post/components/Content";
import InteractionBar from "@/components/InteractionBar";
import UsernameTooltip from "@/components/UsernameTooltip";
import type { Post } from "@/https/post";
import { formatTimeToHour } from "@/utils/timer";

function PostCard({ post }: { post: Post }) {
    console.log(post);

    return (
        <div className="grid grid-cols-12 border-b p-4">
            {/* Avatar */}
            <div className="col-span-1">
                <Avatar className="mt-3 h-9 w-9">
                    <AvatarImage
                        src={
                            post.user?.avatar_url ||
                            "https://github.com/shadcn.png"
                        }
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="col-span-11 flex flex-col">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
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
                    <div>
                        <Options />
                    </div>
                </div>
                <Content post={post} />
                <InteractionBar post={post} />
            </div>
        </div>
    );
}

export default PostCard;
