import ReportPopup from "@/layouts/DefaultLayout/components/NavFooter/components/More/components/Report/ReportPopup/ReportPopup";
import { useState } from "react";

function Report() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="p-2" onClick={() => setOpen(true)}>
        <div className="text-md hover:bg-muted flex w-full cursor-pointer items-center justify-between rounded-sm p-3 font-medium transition">
          Report a problem
        </div>
      </div>
      <ReportPopup
        open={open}
        onClose={() => {
          console.log("click");
          setOpen(false);
        }}
      />
    </>
  );
}

export default Report;
