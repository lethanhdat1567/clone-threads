import ReportPopup from "@/layouts/DefaultLayout/components/NavFooter/components/More/components/Report/ReportPopup/ReportPopup";
import { useState } from "react";

function Report() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="p-2" onClick={() => setOpen(true)}>
                <div className="text-md font-medium w-full flex items-center justify-between rounded-sm p-3 transition cursor-pointer hover:bg-muted-foreground">
                    Report a problem
                </div>
            </div>
            <ReportPopup open={open} onClose={() => setOpen(false)} />
        </>
    );
}

export default Report;
