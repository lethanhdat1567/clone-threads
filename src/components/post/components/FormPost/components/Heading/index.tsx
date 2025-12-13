import { ChevronRight } from "lucide-react";

function Heading() {
    return (
        <div className="flex items-center gap-2">
            <h2 className="text-[14px] font-semibold">datlee.th</h2>
            <ChevronRight size={14} />
            <input
                placeholder="Add a topic"
                className="focus:border-b-muted w-42.5 border-b-2 border-b-transparent text-sm outline-0"
            />
        </div>
    );
}

export default Heading;
