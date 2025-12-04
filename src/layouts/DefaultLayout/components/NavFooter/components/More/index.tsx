import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import Apprearance from "@/layouts/DefaultLayout/components/NavFooter/components/More/components/Apprearance";
import Report from "@/layouts/DefaultLayout/components/NavFooter/components/More/components/Report";
import { TextAlignStart } from "lucide-react";
import { useState } from "react";

function More() {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
                <li className="relative  text-neutral-500 w-[60px] h-[60px] flex items-center justify-center group cursor-pointer">
                    <TextAlignStart />
                    <div className="top-1/2 scale-70 opacity-0 hover:opacity-100 transition -translate-y-1/2 absolute w-full h-[85%] inset-0 bg-white/10 rounded-lg group-hover:scale-100"></div>
                </li>
            </PopoverTrigger>
            <PopoverContent
                side="top"
                align="start"
                alignOffset={12}
                className="bg-primary border-primary text-muted rounded-xl p-0"
            >
                <Apprearance />
                <Separator />
                <Report />
            </PopoverContent>
        </Popover>
    );
}

export default More;
