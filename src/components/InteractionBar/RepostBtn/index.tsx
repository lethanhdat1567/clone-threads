"use client";

import { useState } from "react";
import RepostDropdown from "@/components/InteractionBar/RepostBtn/components/RepostDropdown";
import { Button } from "@/components/ui/button";
import { postService, type Post } from "@/service/postService";
import { Repeat } from "lucide-react";
import { toast } from "sonner";

function RepostBtn({ post }: { post: Post }) {
    const [reposted, setReposted] = useState(post.is_reposted_by_auth);
    const [count, setCount] = useState(post.reposts_and_quotes_count);

    async function handleRepost() {
        const prevReposted = reposted;
        const prevCount = count;

        // Optimistic update
        setReposted(!reposted);
        setCount((prev) => prev + (reposted ? -1 : 1));

        try {
            await postService.repostPost(post.id);
        } catch (err) {
            console.error(err);
            setReposted(prevReposted);
            setCount(prevCount);
            toast.error("Có lỗi xảy ra. Vui lòng thử lại!");
        }
    }

    return (
        <RepostDropdown onRepost={handleRepost}>
            <Button variant="ghost" className="rounded-xl text-sm font-thin">
                <Repeat color={reposted ? "blue" : "black"} /> {count}
            </Button>
        </RepostDropdown>
    );
}

export default RepostBtn;
