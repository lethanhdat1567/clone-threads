import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AddToThread() {
    return (
        <div className="col-span-12 mt-3 ml-2 flex w-full items-center gap-4">
            <Avatar className="h-5 w-5">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-muted-foreground flex-1 text-sm">
                Add to thread
            </div>
        </div>
    );
}

export default AddToThread;
