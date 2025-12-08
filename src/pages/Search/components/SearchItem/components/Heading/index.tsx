import { Button } from "@/components/ui/button";
import UsernameTooltip from "@/components/UsernameTooltip";

function Heading() {
    return (
        <div className="flex w-full items-center justify-between">
            <div className="flex flex-col">
                <UsernameTooltip />
                <span className="text-muted-foreground text-[15px]">
                    Thanh Dat
                </span>
            </div>
            <Button className="px-8">Follow</Button>
        </div>
    );
}

export default Heading;
