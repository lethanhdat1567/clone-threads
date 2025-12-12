// components/post/PostCard.tsx
import { useState } from "react";
import { useSelector } from "react-redux";
import Options from "@/components/post/components/Options";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Content from "@/components/post/components/Content";
import InteractionBar from "@/components/InteractionBar";
import UsernameTooltip from "@/components/UsernameTooltip";
import type { Post } from "@/service/postService";
import { postService } from "@/service/postService";
import { formatTimeToHour } from "@/utils/timer";
import { toast } from "sonner";
import copyToClipboard from "copy-to-clipboard";

type PostCardProps = {
    post: Post;
    onPostUpdate?: (updatedPost: Post) => void;
    onPostDelete?: (postId: number) => void;
};

function PostCard({ post, onPostUpdate, onPostDelete }: PostCardProps) {
    const user = useSelector((state: any) => state.auth.user);
    const [localPost, setLocalPost] = useState<Post>(post);

    // Update local post when prop changes
    const updateLocalPost = (updates: Partial<Post>) => {
        const updatedPost = { ...localPost, ...updates };
        setLocalPost(updatedPost);
        onPostUpdate?.(updatedPost);
    };

    // Handle Save
    const handleSave = async () => {
        try {
            await postService.savePost(localPost.id);
            updateLocalPost({
                is_saved_by_auth: !localPost.is_saved_by_auth,
            });
            toast.success(
                localPost.is_saved_by_auth ? "Post unsaved" : "Post saved",
            );
        } catch (error) {
            console.error("Failed to save post:", error);
            toast.error("Failed to save post");
        }
    };

    // Handle Hide
    const handleHide = async () => {
        try {
            await postService.hidePost(localPost.id);
            onPostDelete?.(localPost.id);
            toast.success("Post hidden");
        } catch (error) {
            console.error("Failed to hide post:", error);
            toast.error("Failed to hide post");
        }
    };

    // Handle Report
    const handleReport = async () => {
        try {
            await postService.reportPost(localPost.id);
            toast.success("Post reported");
        } catch (error) {
            console.error("Failed to report post:", error);
            toast.error("Failed to report post");
        }
    };

    // Handle Delete
    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this post?")) {
            return;
        }

        try {
            // await postService.deletePost(localPost.id);
            onPostDelete?.(localPost.id);
            toast.success("Post deleted");
        } catch (error) {
            console.error("Failed to delete post:", error);
            toast.error("Failed to delete post");
        }
    };

    // Handle Copy Link
    const handleCopyLink = () => {
        const url = `${window.location.origin}/post/${localPost.id}`;
        copyToClipboard(url);
        toast.success("Link copied to clipboard");
    };

    // Handle Edit
    const handleEdit = () => {
        // Navigate to edit page or open edit modal
        console.log("Edit post:", localPost.id);
        toast.info("Edit feature coming soon");
    };

    // Handle Mute
    const handleMute = () => {
        console.log("Mute user");
        toast.info("Mute feature coming soon");
    };

    // Handle Restrict
    const handleRestrict = () => {
        console.log("Restrict user");
        toast.info("Restrict feature coming soon");
    };

    // Handle Block
    const handleBlock = () => {
        console.log("Block user");
        toast.info("Block feature coming soon");
    };

    return (
        <div className="grid grid-cols-12 border-b p-4">
            {/* Avatar */}
            <div className="col-span-1">
                <Avatar className="mt-3 h-9 w-9">
                    <AvatarImage
                        src={
                            localPost.user?.avatar_url ||
                            "https://github.com/shadcn.png"
                        }
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="col-span-11 flex flex-col">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <UsernameTooltip
                            avatar={localPost.user?.avatar_url}
                            bio={localPost.user?.bio}
                            name={localPost.user?.name}
                            username={localPost.user?.username}
                        />
                        <span className="text-muted-foreground text-sm">
                            {formatTimeToHour(localPost.created_at)}
                        </span>
                    </div>
                    <div>
                        <Options
                            postUserId={localPost.user_id}
                            currentUserId={user?.id}
                            onSave={handleSave}
                            onHide={handleHide}
                            onMute={handleMute}
                            onRestrict={handleRestrict}
                            onBlock={handleBlock}
                            onReport={handleReport}
                            onCopyLink={handleCopyLink}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    </div>
                </div>
                <Content post={localPost} />
                <InteractionBar post={localPost} />
            </div>
        </div>
    );
}

export default PostCard;
