import { ChevronRight } from "lucide-react";

function Apprearance() {
    return (
        <div className="p-2">
            <div className="text-md font-medium w-full flex items-center justify-between rounded-sm p-3 transition cursor-pointer hover:bg-muted-foreground">
                Apprearance <ChevronRight size={20} />
            </div>
        </div>
    );
}

export default Apprearance;
