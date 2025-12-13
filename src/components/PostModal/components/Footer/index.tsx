import Options from "@/components/PostModal/components/Footer/Options";
import { Button } from "@/components/ui/button";

function Footer() {
    return (
        <div className="flex items-center justify-between px-6 py-4">
            <Options />
            <Button variant={"outline"}>Post</Button>
        </div>
    );
}

export default Footer;
