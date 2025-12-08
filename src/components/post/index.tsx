import Options from "@/components/post/components/Options";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Content from "@/components/post/components/Content";
import InteractionBar from "@/components/InteractionBar";
import UsernameTooltip from "@/components/UsernameTooltip";

function PostCard() {
    return (
        <div className="grid grid-cols-12 border-b p-4">
            {/* Avatar */}
            <div className="col-span-1">
                <Avatar className="mt-3 h-9 w-9">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="col-span-11 flex flex-col">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <UsernameTooltip />
                        <span className="text-muted-foreground text-sm">
                            15h
                        </span>
                    </div>
                    <div>
                        <Options />
                    </div>
                </div>
                <Content />
                <InteractionBar />
            </div>
        </div>
    );
}

export default PostCard;
