import DialogLogin from "@/components/DialogLogin";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

function InteractionBar() {
    return (
        <div className="mt-3 flex items-center gap-2">
            <DialogLogin>
                <Button
                    variant={"ghost"}
                    className="text-foreground rounded-xl text-sm font-thin"
                >
                    <Heart /> 1.1k
                </Button>
            </DialogLogin>
            <DialogLogin>
                <Button
                    variant={"ghost"}
                    className="text-foreground rounded-xl text-sm font-thin"
                >
                    <Heart /> 1.1k
                </Button>
            </DialogLogin>
            <DialogLogin>
                <Button
                    variant={"ghost"}
                    className="text-foreground rounded-xl text-sm font-thin"
                >
                    <Heart /> 1.1k
                </Button>
            </DialogLogin>
            <DialogLogin>
                <Button
                    variant={"ghost"}
                    className="text-foreground rounded-xl text-sm font-thin"
                >
                    <Heart /> 1.1k
                </Button>
            </DialogLogin>
        </div>
    );
}

export default InteractionBar;
