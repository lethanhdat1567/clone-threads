import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

import { SlidersVertical } from "lucide-react";

export type ReplyPermissionType =
    | "everyone"
    | "followers"
    | "following"
    | "mentioned";

export type PermissionOption = {
    value: ReplyPermissionType;
    label: string;
};

type Props = {
    permission: ReplyPermissionType;
    setPermission: (value: ReplyPermissionType) => void;
    reviewReplies?: boolean;
    setReviewReplies?: (value: boolean) => void;
};

function Options({
    permission,
    setPermission,
    reviewReplies,
    setReviewReplies,
}: Props) {
    const REPLY_PERMISSION_OPTIONS: PermissionOption[] = [
        { value: "everyone", label: "Anyone" },
        { value: "followers", label: "Your followers" },
        { value: "following", label: "Profiles you follow" },
        { value: "mentioned", label: "Profiles you mention" },
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="text-muted-foreground flex cursor-pointer items-center gap-2 text-[14px] font-semibold">
                    <SlidersVertical size={16} />
                    Reply options
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-70">
                <DropdownMenuLabel className="text-muted-foreground py-4 text-sm">
                    Who can reply and quote
                </DropdownMenuLabel>
                {REPLY_PERMISSION_OPTIONS.map((option) => (
                    <DropdownMenuItem
                        key={option.value}
                        onClick={() => setPermission(option.value)}
                        className={cn(
                            "cursor-pointer py-3 text-sm font-semibold",
                            permission === option.value ? "bg-accent" : "",
                        )}
                    >
                        {option.label}
                    </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    <span className="flex-1 cursor-pointer py-3 text-sm font-semibold">
                        Review and approve replies
                    </span>
                    <Switch
                        checked={reviewReplies}
                        onCheckedChange={setReviewReplies}
                    />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Options;
