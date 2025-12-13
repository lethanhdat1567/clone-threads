import { Images } from "lucide-react";

function UploadImages() {
    return (
        <div>
            <label htmlFor="upload" className="cursor-pointer">
                <Images size={20} color="var(--muted-foreground)" />
            </label>

            <input
                id="upload"
                type="file"
                accept="image/*"
                className="hidden"
                multiple
            />
        </div>
    );
}

export default UploadImages;
