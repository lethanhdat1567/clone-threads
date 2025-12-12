import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

function ShareBtn() {
    return (
        <Button
            variant={"ghost"}
            className="text-foreground rounded-xl text-sm font-thin"
        >
            <Send /> 1.1k
        </Button>
    );
}

export default ShareBtn;
