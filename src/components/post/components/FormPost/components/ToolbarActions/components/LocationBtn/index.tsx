import { MapPin } from "lucide-react";

function LocationBtn() {
    return (
        <div>
            <label className="cursor-pointer">
                <MapPin size={20} color="var(--muted-foreground)" />
            </label>
        </div>
    );
}

export default LocationBtn;
