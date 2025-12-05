import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import Apprearance from "@/layouts/DefaultLayout/components/NavFooter/components/More/components/Apprearance";
import DetailSection from "@/layouts/DefaultLayout/components/NavFooter/components/More/components/Apprearance/components/DetailSection";
import Report from "@/layouts/DefaultLayout/components/NavFooter/components/More/components/Report";
import { TextAlignStart } from "lucide-react";
import { useState } from "react";

function More() {
  const [open, setOpen] = useState(false);
  const [showMode, setShowMode] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <li className="group text-muted-foreground hover:text-foreground relative flex h-[60px] w-[60px] cursor-pointer items-center justify-center">
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
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}

export default More;
