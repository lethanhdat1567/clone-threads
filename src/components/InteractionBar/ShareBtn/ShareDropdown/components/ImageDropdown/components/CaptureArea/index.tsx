import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import PostView from "@/components/InteractionBar/ShareBtn/ShareDropdown/components/ImageDropdown/components/PostView";
import images from "@/assets/images";
import type { CropMode } from "@/components/InteractionBar/ShareBtn/ShareDropdown/components/ImageDropdown";

type CaptureAreaProps = {
    post: any;
    selectedTheme: string;
    showMetrics: boolean;
    cropMode: CropMode;
};

const CROP_STYLES: Record<CropMode, string> = {
    auto: "",
    square: "aspect-square",
    instagram: "aspect-[4/5]",
};

const CaptureArea = forwardRef<HTMLDivElement, CaptureAreaProps>(
    ({ post, selectedTheme, showMetrics, cropMode }, ref) => {
        const isAuto = cropMode === "auto";

        return (
            <div
                ref={ref}
                className={cn(
                    "relative overflow-hidden rounded-2xl",
                    selectedTheme === "light" && "text-foreground bg-white",
                    selectedTheme === "dark" && "bg-black text-white",
                )}
            >
                {/* Crop wrapper với aspect ratio cố định */}
                <div className={cn("relative", CROP_STYLES[cropMode])}>
                    {/* Content container */}
                    <div
                        className={cn(
                            "flex items-center justify-center p-8",
                            isAuto ? "relative" : "absolute inset-0",
                        )}
                    >
                        <div className="w-full max-w-xl">
                            <PostView
                                selectedTheme={selectedTheme}
                                post={post}
                                showMetrics={showMetrics}
                            />
                        </div>
                    </div>
                </div>

                {/* Threads logo ở góc phải dưới */}
                <div className="pointer-events-none absolute right-6 bottom-6">
                    <img
                        src={images.threads}
                        alt="Threads"
                        className={cn(
                            "h-7 w-7 opacity-80",
                            selectedTheme === "dark" && "brightness-0 invert",
                        )}
                    />
                </div>
            </div>
        );
    },
);

CaptureArea.displayName = "CaptureArea";

export default CaptureArea;
