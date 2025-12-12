import SocialItem from "@/components/DialogLogin/socialItem";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useSelector } from "react-redux";

type Props = {
    open?: boolean;
    setOpen?: any;
    children?: React.ReactNode;
};

function DialogLogin({ open, setOpen, children }: Props) {
    const user = useSelector((state: any) => state.auth.user);

    return (
        <Dialog open={user ? false : open} onOpenChange={setOpen}>
            {children && <DialogTrigger>{children}</DialogTrigger>}
            <DialogContent
                showCloseButton={false}
                className="bg-card border-muted text-background rounded-xl p-10 text-center"
            >
                <DialogHeader className="hidden">
                    <DialogTitle>Chưa đăng nhập</DialogTitle>
                    <DialogDescription>
                        Bạn cần đăng nhập để truy cập
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <h2 className="text-foreground mb-4 text-4xl font-black">
                        Say more with Threads
                    </h2>
                    <p className="text-md text-muted-foreground mx-auto w-[80%]">
                        Join Threads to share thoughts, find out what's going
                        on, follow your people and more.
                    </p>
                    <SocialItem />
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default DialogLogin;
