import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="bg-background flex min-h-screen items-center justify-center p-4">
            <div className="space-y-3 text-center">
                <h1 className="text-foreground text-md font-bold">
                    Not all who wander are lost, but this page is
                </h1>

                <p className="text-muted-foreground text-sm leading-relaxed">
                    The link's not working or the page
                    <br />
                    is gone. Go back to keep exploring.
                </p>

                <Link to={"/"}>
                    <Button>Back</Button>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
