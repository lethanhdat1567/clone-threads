import { ImagePlay } from "lucide-react";

function GIFBtn() {
    return (
        <div>
            <label className="cursor-pointer">
                <ImagePlay size={20} color="var(--muted-foreground)" />
            </label>
        </div>
    );
}

export default GIFBtn;
