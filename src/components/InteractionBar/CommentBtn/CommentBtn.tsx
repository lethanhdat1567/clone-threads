import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

function CommentBtn() {
    return (
        <Button
            variant={"ghost"}
            className="text-foreground rounded-xl text-sm font-thin"
        >
            <MessageCircle /> 1.1k
        </Button>
    );
}

export default CommentBtn;
