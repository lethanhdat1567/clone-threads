import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Avatar from "@/components/Avatar";
import FormPost from "@/components/post/components/FormPost";
import {
    postService,
    type CreatePostPayload,
    type Post,
} from "@/service/postService";
import { CircleEllipsis } from "lucide-react";
import AddToThread from "@/components/post/components/PostModal/components/AddToThread";
import { Button } from "@/components/ui/button";
import PostHorizontal from "@/components/post/components/PostModal/components/PostHorizontal";
import PostVertical from "@/components/post/components/PostModal/components/PostVertical";
import Options from "@/components/post/components/PostModal/components/Options";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

type Props = {
    open?: boolean;
    setOpen?: any;
    post?: Post;
    children?: React.ReactNode;
    isCreatePost?: boolean;
    isReply?: boolean;
    isQuote?: boolean;
    parentId?: number;
};

export type ReplyPermissionType =
    | "everyone"
    | "followers"
    | "following"
    | "mentioned";

function PostModal({
    open,
    setOpen,
    post,
    children,
    isCreatePost,
    isQuote,
    isReply,
    parentId,
}: Props) {
    const [topic, setTopic] = useState("");
    const [content, setContent] = useState("");
    const [permission, setPermission] =
        useState<ReplyPermissionType>("everyone");
    const [approveReply, setApproveReply] = useState(true);
    const [loading, setLoading] = useState(false);

    async function handleSubmit() {
        if (!content.trim() || loading) return;

        const data: CreatePostPayload = {
            content: content,
            reply_permission: permission,
            parent_id: parentId || null,
            topic_name: topic,
            requires_reply_approval: approveReply,
        };

        setLoading(true);
        try {
            if (isCreatePost) {
                await postService.createPost(data);
                toast.success("Posted");
            } else if (isReply && parentId) {
                await postService.createReply(parentId, data);
                toast.success("Posted");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            setOpen(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent
                showCloseButton={false}
                className="min-w-[40vw] gap-0 p-0"
            >
                <DialogHeader className="hidden">
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                </DialogHeader>
                <div className="flex items-center justify-between border-b px-6 py-4">
                    <button
                        className="cursor-pointer"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </button>
                    <h2 className="text-md font-semibold">
                        {isReply ? "Reply" : "New thread"}
                    </h2>
                    <CircleEllipsis />
                </div>
                {isReply && (
                    <div className="p-4">
                        <PostHorizontal post={post as Post} />
                    </div>
                )}
                <div className="grid grid-cols-12 gap-6 p-6 pb-2">
                    <div className="col-span-1 flex flex-col items-center justify-center">
                        <Avatar
                            className="h-9 w-9"
                            src={post?.user?.avatar_url}
                        />
                        <div className="mt-4 h-full w-0.75 flex-1 bg-[#ccc]"></div>
                    </div>
                    <div className="col-span-11">
                        <FormPost
                            topic={topic}
                            setTopic={setTopic}
                            content={content}
                            setContent={setContent}
                        />
                        {isQuote && (
                            <div className="mt-4 rounded-xl border">
                                <PostVertical post={post as Post} />
                            </div>
                        )}
                    </div>
                </div>
                <div className="cursor-not-allowed pl-7 opacity-40">
                    <AddToThread />
                </div>
                <div className="flex items-center justify-between p-6">
                    <Options
                        permission={permission}
                        setPermission={setPermission}
                        reviewReplies={approveReply}
                        setReviewReplies={setApproveReply}
                    />
                    <Button
                        variant="outline"
                        onClick={handleSubmit}
                        disabled={!content.trim()}
                        className="disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <div className="flex items-center gap-4">
                                <Spinner /> Posting...
                            </div>
                        ) : (
                            "Post"
                        )}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default PostModal;
