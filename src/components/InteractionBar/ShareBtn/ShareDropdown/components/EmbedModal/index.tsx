import { useMemo } from "react";
import { toast } from "sonner";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog";
import PostView from "@/components/InteractionBar/ShareBtn/ShareDropdown/components/EmbedModal/components/PostView";
import type { Post } from "@/service/postService";
import EmbedSection from "@/components/InteractionBar/ShareBtn/ShareDropdown/components/EmbedModal/components/EmbedSection";

type EmbedModalProps = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    post: Post;
    postUrl?: string;
};

function EmbedModal({ isOpen, setIsOpen, post, postUrl }: EmbedModalProps) {
    const embedCode = useMemo(() => {
        const url =
            postUrl ||
            `https://www.threads.net/@${post.user?.username}/post/${post.id}`;

        return `<blockquote class="text-post-media"
    data-text-post-permalink="${url}"
    data-text-post-version="0"
    id="ig-tp-${post.id}"
    style="
        background:#fff;
        border:1px solid #00000026;
        border-radius:16px;
        max-width:540px;
        min-width:270px;
        width:100%;
        margin:1px;
        padding:0;
    ">
    <a href="${url}" target="_blank"></a>
</blockquote>
<script async src="https://www.threads.net/embed.js"></script>`;
    }, [post.id, post.user?.username, postUrl]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(embedCode);
            toast.success("Embed code copied!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to copy embed code");
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent
                showCloseButton={false}
                className="bg-background text-foreground border-border max-w-xl min-w-[37vw] gap-0 rounded-3xl border p-0"
            >
                <VisuallyHidden asChild>
                    <DialogTitle>Embed post</DialogTitle>
                </VisuallyHidden>

                <VisuallyHidden asChild>
                    <DialogDescription>
                        Copy embed code to share this post
                    </DialogDescription>
                </VisuallyHidden>

                {/* Post Preview */}
                <div className="border-border border-b">
                    <PostView post={post} />
                </div>

                {/* Embed code */}
                <EmbedSection embedCode={embedCode} handleCopy={handleCopy} />
            </DialogContent>
        </Dialog>
    );
}

export default EmbedModal;
