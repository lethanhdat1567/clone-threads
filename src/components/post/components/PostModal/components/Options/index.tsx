import type { ReplyPermissionType } from "@/components/post/components/PostModal";
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

import { Check, SlidersVertical } from "lucide-react";

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
                {REPLY_PERMISSION_OPTIONS.map((option) => {
                    const isActive = permission === option.value;

                    return (
                        <DropdownMenuItem
                            key={option.value}
                            onClick={() => setPermission(option.value)}
                            className={cn(
                                "flex cursor-pointer items-center py-3 text-sm font-semibold",
                                isActive && "bg-accent",
                            )}
                        >
                            <span className="flex-1">{option.label}</span>

                            {isActive && (
                                <Check size={16} className="text-primary" />
                            )}
                        </DropdownMenuItem>
                    );
                })}

                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    <span className="flex-1 cursor-pointer py-3 text-sm font-semibold">
                        Review and approve replies
                    </span>
                    <Switch
                        checked={reviewReplies}
                        onCheckedChange={setReviewReplies}
                        className="cursor-pointer"
                    />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Options;
