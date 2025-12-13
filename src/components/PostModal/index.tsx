import Body from "@/components/PostModal/components/Body";
import Footer from "@/components/PostModal/components/Footer";
import Header from "@/components/PostModal/components/Header";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
    children?: React.ReactNode;
};

function PostModal({ children }: Props) {
    return (
        <Dialog>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent showCloseButton={false} className="min-w-[40vw] p-0">
                <DialogHeader className="hidden">
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                </DialogHeader>

                {/* Header */}
                <Header />
                <Body />
                <Footer />
            </DialogContent>
        </Dialog>
    );
}

export default PostModal;
