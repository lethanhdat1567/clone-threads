import AddToThread from "@/components/PostModal/components/Body/components/AddToThread";
import FormPost from "@/components/PostModal/components/Body/components/FormPost";
import ToolbarActions from "@/components/PostModal/components/Body/components/ToolbarActions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Body() {
    return (
        <div className="grid grid-cols-12 px-6 py-2">
            <div className="col-span-1 flex flex-col items-center justify-start">
                <Avatar className="h-10 w-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="bg-muted-foreground mt-2 h-7 w-0.75 flex-1"></div>
            </div>
            <div className="col-span-11 ml-3">
                <FormPost />
                <ToolbarActions />
            </div>
            <AddToThread />
        </div>
    );
}

export default Body;
