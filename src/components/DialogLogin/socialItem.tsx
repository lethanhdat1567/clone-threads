import images from "@/assets/images";
import { ChevronRight } from "lucide-react";

function SocialItem() {
  return (
    <div className="border-back text-foreground bg-background mt-8 flex cursor-pointer items-center justify-between rounded-2xl border p-4">
      <img
        src={images.instagram}
        className="h-12 w-12 rounded-lg object-cover"
      />
      <span className="text-foreground text-lg font-semibold">
        Continue with Instagram
      </span>
      <ChevronRight />
    </div>
  );
}

export default SocialItem;
