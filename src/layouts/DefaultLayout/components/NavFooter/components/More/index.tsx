import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import Apprearance from "@/layouts/DefaultLayout/components/NavFooter/components/More/components/Apprearance";
import DetailSection from "@/layouts/DefaultLayout/components/NavFooter/components/More/components/Apprearance/components/DetailSection";
import Logout from "@/layouts/DefaultLayout/components/NavFooter/components/More/components/Logout";
import Report from "@/layouts/DefaultLayout/components/NavFooter/components/More/components/Report";
import { TextAlignStart } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

function More() {
    const [open, setOpen] = useState(false);
    const [showMode, setShowMode] = useState(false);
    const user = useSelector((state: any) => state.auth.user);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
                <li className="group text-muted-foreground hover:text-foreground relative flex h-10 w-10 cursor-pointer items-center justify-center md:h-15 md:w-15">
                    <TextAlignStart />
                </li>
            </PopoverTrigger>
            <PopoverContent
                side="top"
                align="start"
                alignOffset={12}
                className="border-border bg-popover text-popover-foreground rounded-xl p-0"
            >
                {showMode ? (
                    <DetailSection setMode={setShowMode} />
                ) : (
                    <>
                        <Apprearance setMode={setShowMode} />
                        <Separator />
                        <Report />
                        {user && <Logout />}
                    </>
                )}
            </PopoverContent>
        </Popover>
    );
}

export default More;
