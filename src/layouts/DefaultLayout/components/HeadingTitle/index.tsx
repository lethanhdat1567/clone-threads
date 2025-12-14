import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";

function HeadingTitle() {
    const user = useSelector((state: any) => state.auth.user);

    return (
        <div className="bg-muted text-md sticky top-0 z-50 flex h-(--header-h) items-center justify-center font-medium">
            {user ? (
                <div className="flex cursor-pointer items-center gap-2 text-sm font-semibold">
                    For your{" "}
                    <Button
                        variant={"outline"}
                        className="h-6 w-6 rounded-full"
                        size={"icon-sm"}
                    >
                        <ChevronDown size={16} />
                    </Button>
                </div>
            ) : (
                <div className="text-sm font-semibold">Home</div>
            )}
            <div className="absolute -bottom-6 -left-3 hidden h-10 w-10 md:block">
                <div className="absolute right-0 bottom-0 h-6 w-7 rounded-tl-4xl border-t border-l bg-transparent shadow-[-10px_-3px_0_0_var(--accent)]"></div>
            </div>
            <div className="absolute right-0 -bottom-6 hidden h-10 w-10 md:block">
                <div className="absolute right-0 bottom-0 h-6 w-7 rounded-tr-4xl border-t border-r bg-transparent shadow-[10px_-3px_0_0_var(--accent)]"></div>
            </div>
        </div>
    );
}

export default HeadingTitle;
