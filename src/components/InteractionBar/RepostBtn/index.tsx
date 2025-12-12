import { Button } from "@/components/ui/button";
import { Repeat } from "lucide-react";

function RepostBtn() {
    return (
        <Button
            variant={"ghost"}
            className="text-foreground rounded-xl text-sm font-thin"
        >
            <Repeat /> 1.1k
        </Button>
    );
}

export default RepostBtn;
