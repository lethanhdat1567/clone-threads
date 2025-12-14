import { useRef, useState } from "react";
import { toast } from "sonner";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
import type { Post } from "@/service/postService";
import { captureImage } from "@/components/InteractionBar/ShareBtn/ShareDropdown/components/ImageDropdown/helpers";

import Colors from "@/components/InteractionBar/ShareBtn/ShareDropdown/components/ImageDropdown/components/Colors";
import CaptureArea from "@/components/InteractionBar/ShareBtn/ShareDropdown/components/ImageDropdown/components/CaptureArea";
import Controls from "@/components/InteractionBar/ShareBtn/ShareDropdown/components/ImageDropdown/components/Controls";

type Props = {
    isOpen: boolean;
    setIsOpen: any;
    post: Post;
};

export type CropMode = "auto" | "square" | "instagram";

function CopyAsImageModal({ isOpen, setIsOpen, post }: Props) {
    const captureRef = useRef(null);
    const [selectedTheme, setSelectedTheme] = useState("light");
    const [showMetrics, setShowMetrics] = useState(true);
    const [cropMode, setCropMode] = useState<CropMode>("auto");

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
            const date = new Date().toISOString().split("T")[0];
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

    // Determine background color based on cropMode and theme
    const getDialogBackground = () => {
        // Auto mode: gradient background
        if (cropMode === "auto") {
            return selectedTheme === "dark"
                ? "bg-[#1e1e1e] "
                : "bg-[#f5f5f5]  text-black";
        }

        // Square/Instagram mode: neutral background
        return selectedTheme === "dark" ? "bg-[#0a0a0a]" : "bg-white ";
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent
                className={cn(
                    "max-w-150 rounded-2xl p-6 transition-colors duration-200",
                    getDialogBackground(),
                )}
                showCloseButton={false}
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
                <CaptureArea
                    ref={captureRef}
                    post={post}
                    selectedTheme={selectedTheme}
                    showMetrics={showMetrics}
                    cropMode={cropMode}
                />

                {/* CONTROLS */}
                <div className="space-y-4">
                    {/* Theme Selector */}
                    <Colors
                        selectedTheme={selectedTheme}
                        setSelectedTheme={setSelectedTheme}
                    />

                    {/* Bottom Controls */}
                    <Controls
                        showMetrics={showMetrics}
                        setShowMetrics={setShowMetrics}
                        cropMode={cropMode}
                        setCropMode={setCropMode}
                        onDownload={handleDownloadImage}
                        onCopy={handleCopyImage}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default CopyAsImageModal;
