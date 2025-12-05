import DialogLogin from "@/components/DialogLogin";
import { PinIcon } from "lucide-react";

function Pin() {
  return (
    <DialogLogin>
      <li className="group text-muted-foreground relative flex h-[60px] w-[60px] cursor-pointer items-center justify-center">
        <span className="absolute z-20">
          <PinIcon />
        </span>
        <div className="bg-accent absolute inset-0 top-1/2 h-[85%] w-full -translate-y-1/2 scale-70 rounded-lg opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></div>
      </li>
    </DialogLogin>
  );
}

export default Pin;
