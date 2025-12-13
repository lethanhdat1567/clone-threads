import GIFBtn from "@/components/post/components/FormPost/components/ToolbarActions/components/GIFBtn";
import IconBtn from "@/components/post/components/FormPost/components/ToolbarActions/components/IconBtn";
import LocationBtn from "@/components/post/components/FormPost/components/ToolbarActions/components/LocationBtn";
import UploadImages from "@/components/post/components/FormPost/components/ToolbarActions/components/UploadImages";

function ToolbarActions() {
    return (
        <div className="mt-2 flex items-center gap-4">
            <UploadImages />
            <GIFBtn />
            <IconBtn />
            <LocationBtn />
        </div>
    );
}

export default ToolbarActions;
