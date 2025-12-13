import images from "@/assets/images";
import {
    Avatar as RootAvatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

function Avatar({
    className,
    src,
}: {
    className?: string;
    src?: string | null;
}) {
    return (
        <RootAvatar className={className}>
            <AvatarImage src={src || images.avatar} />
            <AvatarFallback>CN</AvatarFallback>
        </RootAvatar>
    );
}

export default Avatar;
