import BodyContent from "@/layouts/DefaultLayout/components/BodyContent";
import HeadingTitle from "@/layouts/DefaultLayout/components/HeadingTitle";
import LoginPanel from "@/layouts/DefaultLayout/components/LoginPanel";
import Sidebar from "@/layouts/DefaultLayout/components/Sidebar";
import { useEffect, useRef } from "react";

function DefaultLayout() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const parent = parentRef.current;
    const content = contentRef.current;
    if (!parent || !content) return;

    // Wheel scroll từ bất cứ đâu → scroll content
    const handleWheel = (e: WheelEvent) => {
      content.scrollBy({ top: e.deltaY });
      // Sync proxy scrollbar
      parent.scrollTop = content.scrollTop;
      e.preventDefault();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="text-background flex h-screen items-start overflow-hidden">
      <Sidebar />
      <div className="bg-accent text-foreground flex h-screen flex-1 items-start justify-center gap-4 overflow-auto">
        <div className="w-[640px]">
          <HeadingTitle />
          <BodyContent ref={contentRef} />
        </div>
        <LoginPanel />
      </div>
    </div>
  );
}

export default DefaultLayout;
