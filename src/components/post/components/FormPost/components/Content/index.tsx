import { Textarea } from "@/components/ui/textarea";

function Content() {
    return (
        <div>
            <Textarea
                className="min-h-1 resize-none border-none pl-0 text-[16px] shadow-none ring-0! focus:ring-0!"
                placeholder="Share your thoughts..."
                rows={1}
            />
        </div>
    );
}

export default Content;
