import { Images } from "lucide-react";
import { ChangeEvent, useRef } from "react";

function UploadImages() {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="space-y-3">
            {/* Upload Button */}
            <div>
                <label htmlFor="upload" className="cursor-pointer">
                    <Images size={20} color="var(--muted-foreground)" />
                </label>

                <input
                    ref={inputRef}
                    id="upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    multiple
                />
            </div>
        </div>
    );
}

export default UploadImages;
