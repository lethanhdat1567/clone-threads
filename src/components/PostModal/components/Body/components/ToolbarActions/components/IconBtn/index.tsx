import { Smile } from "lucide-react";

function IconBtn() {
    return (
        <div>
            <label className="cursor-pointer">
                <Smile size={20} color="var(--muted-foreground)" />
            </label>
        </div>
    );
}

export default IconBtn;
