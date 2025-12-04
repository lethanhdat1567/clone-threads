import images from "@/assets/images";
import { ChevronRight } from "lucide-react";

function SocialItem() {
    return (
        <div className="flex items-center justify-between border p-4 mt-8 rounded-2xl border-muted-foreground cursor-pointer bg-sidebar-primary">
            <img
                src={images.instagram}
                className="w-12 h-12 object-cover rounded-lg"
            />
            <span className="text-lg font-semibold">
                Continue with Instagram
            </span>
            <ChevronRight />
        </div>
    );
}

export default SocialItem;
