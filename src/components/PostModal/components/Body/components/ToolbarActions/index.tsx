import GIFBtn from "@/components/PostModal/components/Body/components/ToolbarActions/components/GIFBtn";
import IconBtn from "@/components/PostModal/components/Body/components/ToolbarActions/components/IconBtn";
import LocationBtn from "@/components/PostModal/components/Body/components/ToolbarActions/components/LocationBtn";
import UploadImages from "@/components/PostModal/components/Body/components/ToolbarActions/components/UploadImages";

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
