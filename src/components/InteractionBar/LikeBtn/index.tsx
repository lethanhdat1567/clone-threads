"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { postService, type Post } from "@/service/postService";
import { Heart } from "lucide-react";
import { toast } from "sonner";

type Props = {
    post?: Post;
    unsetCount?: boolean;
};

function LikeBtn({ post, unsetCount }: Props) {
    const [liked, setLiked] = useState(post?.is_liked_by_auth || false);
    const [count, setCount] = useState(post?.likes_count);

    const handleClick = async () => {
        if (!post) return;

        const prevLiked = liked;
        const prevCount = count;

        setLiked(!liked);
        setCount((prev) => (prev as number) + (liked ? -1 : 1));

        try {
            await postService.likePost(post.id);
        } catch (err) {
            console.error(err);
            setLiked(prevLiked);
            setCount(prevCount);
            toast.error("Có lỗi xảy ra. Vui lòng thử lại!");
        }
    };

    return (
        <Button
            variant="ghost"
            className={`rounded-xl text-sm font-thin ${liked ? "text-red-500" : "text-foreground"}`}
            onClick={handleClick}
        >
            <Heart fill={liked ? "currentColor" : "none"} />{" "}
            {!unsetCount && count}
        </Button>
    );
}

export default LikeBtn;
