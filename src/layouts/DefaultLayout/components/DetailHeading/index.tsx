import { Button } from "@/components/ui/button";
import { ArrowLeft, Ellipsis } from "lucide-react";
import { useNavigate } from "react-router-dom";

function DetailHeading() {
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    return (
        <div className="bg-muted text-md sticky top-0 z-50 flex h-(--header-h) items-center justify-center font-medium">
            <div className="flex w-full items-center justify-between">
                <Button
                    variant={"outline"}
                    size={"icon-sm"}
                    className="h-7 w-7 rounded-full"
                    onClick={handleBack}
                >
                    <ArrowLeft />
                </Button>
                <span className="text-md font-semibold">Thread</span>
                <Button
                    variant={"outline"}
                    size={"icon-sm"}
                    className="h-7 w-7 rounded-full"
                >
                    <Ellipsis />
                </Button>
            </div>
            <div className="absolute -bottom-6 -left-3 h-10 w-10">
                <div className="absolute right-0 bottom-0 h-6 w-7 rounded-tl-4xl border-t border-l bg-transparent shadow-[-10px_-3px_0_0_var(--accent)]"></div>
            </div>
            <div className="absolute right-0 -bottom-6 h-10 w-10">
                <div className="absolute right-0 bottom-0 h-6 w-7 rounded-tr-4xl border-t border-r bg-transparent shadow-[10px_-3px_0_0_var(--accent)]"></div>
            </div>
        </div>
    );
}

export default DetailHeading;
