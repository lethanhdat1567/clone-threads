import { ChevronRight } from "lucide-react";

function Activity() {
    return (
        <div className="text-muted-foreground flex cursor-pointer items-center gap-2 text-sm">
            View activity <ChevronRight size={14} />
        </div>
    );
}

export default Activity;
