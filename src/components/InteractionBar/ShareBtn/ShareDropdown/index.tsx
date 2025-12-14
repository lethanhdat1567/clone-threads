import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Post } from "@/service/postService";
import { Braces, Images, Link } from "lucide-react";
import copyToClipboard from "copy-to-clipboard";
import { toast } from "sonner";
import ImageDropdown from "@/components/InteractionBar/ShareBtn/ShareDropdown/components/ImageDropdown";
import { useState } from "react";
import EmbedModal from "@/components/InteractionBar/ShareBtn/ShareDropdown/components/EmbedModal";

type Props = {
    children: React.ReactNode;
    post: Post;
};

function ShareDropdown({ children, post }: Props) {
    const [isImageDropdown, setIsImageDropdown] = useState(false);
    const [isEmbedOpen, setIsEmbedOpen] = useState(false);

    const handleCopy = () => {
        copyToClipboard("#");
        toast("Copied!");
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
                <DropdownMenuContent
                    className="w-55 rounded-2xl p-2"
                    side="bottom"
                    align="start"
                >
                    <DropdownMenuItem
                        onClick={handleCopy}
                        className="flex cursor-pointer items-center justify-between rounded-lg py-4 text-sm font-semibold"
                    >
                        Copy link <Link color="black" />
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setIsImageDropdown(true)}
                        className="flex cursor-pointer items-center justify-between rounded-lg py-4 text-sm font-semibold"
                    >
                        Copy as image <Images color="black" />
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setIsEmbedOpen(true)}
                        className="flex cursor-pointer items-center justify-between rounded-lg py-4 text-sm font-semibold"
                    >
                        Get embed code <Braces color="black" />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <ImageDropdown
                isOpen={isImageDropdown}
                setIsOpen={setIsImageDropdown}
                post={post}
            />

            <EmbedModal
                isOpen={isEmbedOpen}
                setIsOpen={setIsEmbedOpen}
                post={post}
            />
        </>
    );
}

export default ShareDropdown;
