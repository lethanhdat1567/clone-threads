import SocialItem from "@/components/DialogLogin/socialItem";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
    open?: boolean;
    setOpen?: any;
    children?: React.ReactNode;
};

function DialogLogin({ open, setOpen, children }: Props) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {children && <DialogTrigger>{children}</DialogTrigger>}
            <DialogContent
                showCloseButton={false}
                className="bg-primary border-primary text-background text-center p-10 rounded-xl"
            >
                <DialogHeader className="hidden">
                    <DialogTitle>Chưa đăng nhập</DialogTitle>
                    <DialogDescription>
                        Bạn cần đăng nhập để truy cập
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <h2 className="text-4xl font-black mb-4">
                        Say more with Threads
                    </h2>
                    <p className="w-[80%] mx-auto text-md text-muted-foreground">
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
