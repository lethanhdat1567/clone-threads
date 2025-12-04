import DialogLogin from "@/components/DialogLogin";
import { PinIcon } from "lucide-react";

function Pin() {
    return (
        <DialogLogin>
            <li className="relative  text-neutral-500 w-[60px] h-[60px] flex items-center justify-center group cursor-pointer">
                <PinIcon />
                <div className="top-1/2 scale-70 opacity-0 hover:opacity-100 transition -translate-y-1/2 absolute w-full h-[85%] inset-0 bg-white/10 rounded-lg group-hover:scale-100"></div>
            </li>
        </DialogLogin>
    );
}

export default Pin;
