import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InputGroupAddon, InputGroupButton } from "@/components/ui/input-group";
import { Clock, SlidersHorizontal, User } from "lucide-react";

function Filter() {
    const data = [
        {
            label: "After date",
            icon: Clock,
            value: "after",
        },
        {
            label: "Before date",
            icon: Clock,
            value: "before",
        },
        {
            label: "From profile...",
            icon: User,
            value: "profile",
        },
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <InputGroupAddon align="inline-end">
                    <InputGroupButton>
                        <SlidersHorizontal size={30} />
                    </InputGroupButton>
                </InputGroupAddon>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                side="bottom"
                align="end"
                className="w-60 rounded-2xl p-2"
            >
                {data.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.value}
                            className="hover:bg-muted text-md flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3 font-medium"
                        >
                            <div className="flex items-center gap-3">
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </div>
                        </div>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Filter;
