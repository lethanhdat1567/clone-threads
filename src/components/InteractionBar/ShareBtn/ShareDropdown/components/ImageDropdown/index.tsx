import { useRef, useState } from "react";
import { toast } from "sonner";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

// import threadsLogo from "@/assets/images/threads-logo.svg";
// import downloadIcon from "@/assets/icons/download-icon.svg";
import { cn } from "@/lib/utils";
import type { Post } from "@/service/postService";
import { captureImage } from "@/components/InteractionBar/ShareBtn/ShareDropdown/components/ImageDropdown/helpers";
import PostCard from "@/components/post";

type Props = {
    isOpen: boolean;
    setIsOpen: any;
    post: Post;
};

function CopyAsImageModal({ isOpen, setIsOpen, post }: Props) {
    const captureRef = useRef(null);
    const [selectedTheme, setSelectedTheme] = useState("light");
    const [showMetrics, setShowMetrics] = useState(true);
    const [cropMode, setCropMode] = useState("auto");

    // Handler cho Copy button
    const handleCopyImage = async () => {
        try {
            const dataUrl = await captureImage(captureRef);

            const response = await fetch(dataUrl);
            const blob = await response.blob();

            await navigator.clipboard.write([
                new ClipboardItem({ "image/png": blob }),
            ]);

            toast("Image copied to clipboard!");
            setIsOpen(false);
        } catch (error) {
            console.error("Failed to copy image:", error);
            toast.error("Failed to copy image");
        }
    };

    // Handler cho Download button
    const handleDownloadImage = async () => {
        try {
            const dataUrl = await captureImage(captureRef);

            // Tạo link để download
            const link = document.createElement("a");

            // Tạo tên file
            const date = new Date().toISOString().split("T")[0]; // 2025-11-25
            const username = post.user?.username || "user";
            link.download = `threads-${username}-${date}.png`;

            link.href = dataUrl;

            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            toast("Image downloaded successfully!");
            setIsOpen(false);
        } catch (error) {
            console.error("Failed to download image:", error);
            toast.error("Failed to download image");
        }
    };

    if (!post) {
        toast.error("No post data provided to CopyAsImageModal");
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent
                className={cn(
                    "max-w-150! rounded-2xl bg-[#f5f5f5] p-6",
                    selectedTheme === "dark" && "border-[#1e1e1e] bg-[#1e1e1e]",
                )}
            >
                <VisuallyHidden asChild>
                    <DialogTitle>Copy post as image</DialogTitle>
                </VisuallyHidden>
                <VisuallyHidden asChild>
                    <DialogDescription>
                        Capture and copy this post as an image to clipboard
                    </DialogDescription>
                </VisuallyHidden>

                {/* CAPTURE AREA */}
                <div
                    ref={captureRef}
                    className={cn(
                        "relative rounded-xl p-2 shadow-sm",
                        selectedTheme === "light" && "bg-white text-black",
                        selectedTheme === "dark" &&
                            "bg-black text-white [&_img]:brightness-60 [&_img]:invert",
                    )}
                >
                    <PostCard post={post} />

                    {/* Threads logo */}
                    <div className="absolute right-4 bottom-4">
                        <img
                            src={""}
                            alt="logo"
                            className={cn(
                                "w-6",
                                selectedTheme === "dark" && "invert",
                            )}
                        />
                    </div>
                </div>

                {/* CONTROLS */}
                <div className="space-y-4">
                    {/* Theme Selector */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => setSelectedTheme("light")}
                            className={cn(
                                "h-5 w-5 rounded-full border-2 bg-white",
                                selectedTheme === "light"
                                    ? "border-blue-600"
                                    : "border-transparent",
                            )}
                        />
                        <button
                            onClick={() => setSelectedTheme("dark")}
                            className={cn(
                                "h-5 w-5 rounded-full border-2 bg-black",
                                selectedTheme === "dark"
                                    ? "border-blue-600"
                                    : "border-transparent",
                            )}
                        />
                    </div>

                    {/* Bottom Controls */}
                    <div className="-mx-6 -mb-6 flex items-center justify-between rounded-b-2xl bg-white px-6 py-3 shadow-sm">
                        <div className="flex items-center gap-2">
                            <Checkbox
                                checked={showMetrics}
                                onCheckedChange={setShowMetrics}
                                id="show-metrics"
                                className="h-5 w-5 rounded-full"
                            />
                            <label
                                htmlFor="show-metrics"
                                className="cursor-pointer text-sm"
                            >
                                Show metrics
                            </label>
                        </div>

                        <div className="flex items-center gap-3">
                            <Select
                                value={cropMode}
                                onValueChange={setCropMode}
                            >
                                <SelectTrigger className="h-8">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="auto">Auto</SelectItem>
                                    <SelectItem value="square">
                                        Square
                                    </SelectItem>
                                    <SelectItem value="instagram">
                                        Instagram post
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex items-center gap-2">
                            {/*  Download button với onClick handler */}
                            <Button
                                onClick={handleDownloadImage}
                                variant="outline"
                                size="icon"
                                className="h-8"
                            >
                                <img
                                    src={""}
                                    alt="download icon"
                                    className="w-5"
                                />
                            </Button>

                            {/* Copy button */}
                            <Button
                                onClick={handleCopyImage}
                                className="h-8 bg-black text-white"
                            >
                                Copy
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default CopyAsImageModal;
