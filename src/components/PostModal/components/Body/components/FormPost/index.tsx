import { Textarea } from "@/components/ui/textarea";
import { ChevronRight } from "lucide-react";

function FormPost() {
    return (
        <div>
            <div className="flex items-center gap-1">
                <h2 className="border-b border-transparent text-sm font-semibold">
                    DatLee.th
                </h2>
                <ChevronRight size={16} color="#ccc" />
                <input
                    placeholder="Add a topic"
                    className="focus:border-b-accent border-b border-b-transparent text-sm outline-0"
                />
            </div>
            <Textarea
                className="min-h-1 resize-none border-none p-1 pl-0 shadow-none focus:ring-0!"
                placeholder="What's new?"
            />
        </div>
    );
}

export default FormPost;
