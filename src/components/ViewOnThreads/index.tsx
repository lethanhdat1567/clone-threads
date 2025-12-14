import { logoIcon } from "@/assets/icons/logo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function ViewOnThreads({ to }: { to: string }) {
    return (
        <Link to={to} className="mt-2 flex items-end">
            <Button variant={"secondary"} className="ml-auto text-xs">
                View on Threads {logoIcon}
            </Button>
        </Link>
    );
}

export default ViewOnThreads;
