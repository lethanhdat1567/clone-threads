import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Avatar from "@/components/Avatar";
import FormPost from "@/components/post/components/FormPost";
import type { Post } from "@/service/postService";
import { CircleEllipsis } from "lucide-react";
import AddToThread from "@/components/post/components/PostModal/components/AddToThread";
import { Button } from "@/components/ui/button";
import PostHorizontal from "@/components/post/components/PostModal/components/PostHorizontal";
import PostVertical from "@/components/post/components/PostModal/components/PostVertical";
import Options from "@/components/post/components/PostModal/components/Options";

type Props = {
    open?: boolean;
    setOpen?: any;
    post?: Post;
    children?: React.ReactNode;
};

function PostModal({ open, setOpen, post, children }: Props) {
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
                    <h2 className="text-md font-semibold">New thread</h2>
                    <CircleEllipsis />
                </div>
                <div className="p-4">
                    <PostHorizontal post={post} />
                </div>
                <div className="grid grid-cols-12 gap-6 p-6 pb-2">
                    <div className="col-span-1 flex flex-col items-center justify-center">
                        <Avatar className="h-9 w-9" />
                        <div className="mt-4 h-full w-0.75 flex-1 bg-[#ccc]"></div>
                    </div>
                    <div className="col-span-11">
                        <FormPost />
                        <div className="mt-4 rounded-xl border">
                            <PostVertical post={post} />
                        </div>
                    </div>
                </div>
                <div className="pl-6">
                    <AddToThread />
                </div>
                <div className="flex items-center justify-between p-6">
                    <Options />
                    <Button variant={"outline"}>Post</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default PostModal;
