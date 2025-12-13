import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import UsernameTooltip from "@/components/UsernameTooltip";

function FollowItem() {
    return (
        <div className="grid grid-cols-12 gap-10 pt-4">
            <div className="col-span-1">
                <Avatar className="h-9 w-9" />
            </div>
            <div className="col-span-11 border-b">
                <div className="flex items-center justify-between pb-2">
                    <div>
                        <div className="flex items-center gap-2">
                            <UsernameTooltip />
                            <span className="text-muted-foreground text-sm">
                                11w
                            </span>
                        </div>
                        <span className="text-muted-foreground text-[15px]">
                            Follow suggestion
                        </span>
                    </div>
                    <Button className="px-8 font-semibold">Follow</Button>
                </div>
            </div>
        </div>
    );
}

export default FollowItem;
