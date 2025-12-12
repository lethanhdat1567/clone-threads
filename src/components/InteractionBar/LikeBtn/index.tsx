import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

type Props = {
    postId?: number | null;
    postCount?: number | null;
};

function LikeBtn({ postId, postCount }: Props) {
    return (
        <Button
            variant={"ghost"}
            className="text-foreground rounded-xl text-sm font-thin"
        >
            <Heart /> {postCount}
        </Button>
    );
}

export default LikeBtn;
