import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Content from "@/pages/Search/components/SearchItem/components/Content";
import Heading from "@/pages/Search/components/SearchItem/components/Heading";

function SearchItem() {
    return (
        <div className="grid grid-cols-12 gap-10 pt-4">
            <div className="col-span-1">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="col-span-11 border-b">
                <Heading />
                <Content />
                <div className="text-muted-foreground mt-3 pb-4 text-[14px]">
                    4,310 followers
                </div>
            </div>
        </div>
    );
}

export default SearchItem;
