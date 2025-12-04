import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import FileUpload from "@/layouts/DefaultLayout/components/NavFooter/components/More/components/Report/ReportPopup/FileUpload";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ReportPopupProps {
    open: boolean;
    onClose: () => void;
}

export default function ReportPopup({ open, onClose }: ReportPopupProps) {
    // Tạo div portal khi component mount
    const [container] = useState(() => document.createElement("div"));

    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        };
    }, [container]);

    if (!open) return null;

    return createPortal(
        <>
            {/* Overlay blur */}
            <div
                onClick={onClose} // click ngoài đóng
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            ></div>

            {/* Modal content */}
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="relative  rounded-lg w-[500px] p-6">
                    {/* Nội dung popup */}
                    <h2 className="text-md text-center mb-4 font-semibold  text-muted">
                        Report a problem
                    </h2>
                    <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
                        <Textarea
                            className="w-full rounded-md p-2 mb-4 text-muted resize-none h-30 outline-0 ring-0 border-0"
                            placeholder="Please include as many details as possible"
                            rows={5}
                        />
                        <div className="flex items-center justify-between text-muted-foreground mt-2">
                            <FileUpload />
                            <Button
                                variant={"outline"}
                                className="bg-neutral-900 border-neutral-800"
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        container
    );
}
