/* eslint-disable react-hooks/set-state-in-effect */
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import FileUpload from "@/layouts/DefaultLayout/components/NavFooter/components/More/components/Report/ReportPopup/FileUpload";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ReportPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function ReportPopup({ open, onClose }: ReportPopupProps) {
  const [container] = useState(() => document.createElement("div"));
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  // Hiệu ứng fade + scale khi open/close
  useEffect(() => {
    if (open) setVisible(true);
    else {
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  if (!visible) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center">
      {/* Overlay blur + fade */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/10 backdrop-blur-xl transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Modal content */}
      <div
        className={`relative w-[500px] transform rounded-2xl p-6 transition-all duration-300 ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <h2 className="text-foreground mb-4 text-center text-base font-semibold">
          Report a problem
        </h2>
        <div className="bg-secondary rounded-2xl p-6">
          <Textarea
            className="bg-secondary! text-foreground placeholder:text-muted-foreground mb-4 h-30 w-full resize-none rounded-md border-0 p-2 ring-0 outline-0"
            placeholder="Please include as many details as possible"
            rows={5}
          />
          <div className="text-muted-foreground mt-2 flex items-center justify-between">
            <FileUpload />
            <Button
              variant="outline"
              className="border-border bg-background hover:bg-accent"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <button
        onClick={onClose}
        className={`bg-secondary/30 text-foreground hover:bg-secondary absolute top-10 left-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        <X />
      </button>
    </div>,
    container,
  );
}
