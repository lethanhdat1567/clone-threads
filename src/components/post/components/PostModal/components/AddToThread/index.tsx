import Avatar from "@/components/Avatar";

function AddToThread() {
    return (
        <div className="flex items-center gap-4">
            <Avatar className="h-4 w-4" />
            <span className="text-muted-foreground text-sm">Add to thread</span>
        </div>
    );
}

export default AddToThread;
