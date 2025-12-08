import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

function UsernameTooltip() {
    return (
        <Tooltip>
            <TooltipTrigger>
                <h2 className="cursor-pointer text-sm font-semibold hover:underline">
                    Le Thanh Dat
                </h2>
            </TooltipTrigger>
            <TooltipContent
                side="bottom"
                align="start"
                className="bg-background text-foreground w-100 rounded-3xl border p-5 shadow [&_span>svg]:hidden!"
            >
                <div className="mb-2 flex items-center gap-10">
                    <div className="flex-1">
                        <h2 className="mb-1 text-xl font-bold">Le Thanh Dat</h2>
                        <p className="text-[16px]">brfootball</p>
                    </div>
                    <Avatar className="h-16 w-16">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <p className="w-full text-[16px]">
                    Where football meets the internet. Get our app
                </p>
                <span className="text-muted-foreground mt-3 mb-5 block text-[14px]">
                    3.1M followers
                </span>
                <Button className="w-full">Follow</Button>
            </TooltipContent>
        </Tooltip>
    );
}

export default UsernameTooltip;
