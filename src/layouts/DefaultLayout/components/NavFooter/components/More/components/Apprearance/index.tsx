import { ChevronRight } from "lucide-react";

function Apprearance({ setMode }: { setMode: any }) {
  return (
    <div className="p-2" onClick={() => setMode(true)}>
      <div className="text-md hover:bg-muted flex w-full cursor-pointer items-center justify-between rounded-sm p-3 font-medium transition">
        Apprearance <ChevronRight size={20} />
      </div>
    </div>
  );
}

export default Apprearance;
