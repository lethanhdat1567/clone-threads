import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

function AvatarModal() {
    return (
        <Dialog>
            <DialogTrigger className="relative cursor-pointer">
                <Avatar className="h-9 w-9" />
                <div className="absolute -right-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full bg-black">
                    <Plus size={12} color="#fff" />
                </div>
            </DialogTrigger>
            <DialogContent
                showCloseButton={false}
                className="w-[25vw] rounded-xl"
            >
                <DialogHeader className="hidden">
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                </DialogHeader>
                <div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-md font-bold">Dat Lee.th</h2>
                            <h4 className="text-sm">bido bido d</h4>
                        </div>
                        <Avatar className="h-14 w-14" />
                    </div>
                    <div className="text-muted-foreground mt-3 mb-5 text-sm font-thin">
                        13 followers
                    </div>
                    <Button className="w-full">Follow</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default AvatarModal;
