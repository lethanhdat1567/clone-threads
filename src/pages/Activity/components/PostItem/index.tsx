import Avatar from "@/components/Avatar";
import InteractionBar from "@/components/InteractionBar";
import UsernameTooltip from "@/components/UsernameTooltip";

function PostItem() {
    return (
        <div className="grid grid-cols-12 gap-10 pt-4">
            <div className="col-span-1">
                <Avatar className="h-9 w-9" />
            </div>
            <div className="col-span-11 border-b pb-2">
                <div className="mb-1 flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <UsernameTooltip />
                            <span className="text-muted-foreground text-sm">
                                11w
                            </span>
                        </div>
                        <span className="text-muted-foreground text-[15px]">
                            Posted their first thread
                        </span>
                    </div>
                </div>
                <div className="text-[15px]">Content Content Content</div>
                <InteractionBar />
            </div>
        </div>
    );
}

export default PostItem;
