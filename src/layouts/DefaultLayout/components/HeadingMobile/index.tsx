import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import More from "@/layouts/DefaultLayout/components/NavFooter/components/More";

function HeadingMobile() {
    return (
        <div className="bg-background/70 border-border sticky top-0 z-50 flex h-(--header-h) items-center justify-between border-b px-6 backdrop-blur-md backdrop-saturate-150 md:hidden">
            <div>
                <More />
            </div>
            <Logo />
            <Button>Open app</Button>
        </div>
    );
}

export default HeadingMobile;
