import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Download } from "lucide-react";
import type { CropMode } from "@/components/InteractionBar/ShareBtn/ShareDropdown/components/ImageDropdown";

type ControlsProps = {
    showMetrics: boolean;
    setShowMetrics: (value: boolean) => void;

    cropMode: CropMode;
    setCropMode: (value: CropMode) => void;

    onDownload: () => void;
    onCopy: () => void;
};

function Controls({
    showMetrics,
    setShowMetrics,
    cropMode,
    setCropMode,
    onDownload,
    onCopy,
}: ControlsProps) {
    return (
        <div className="bg-background text-foreground -mx-6 -mb-6 flex items-center justify-between rounded-b-2xl px-6 py-3 shadow-sm">
            <div className="flex items-center gap-2">
                <Checkbox
                    checked={showMetrics}
                    onCheckedChange={setShowMetrics}
                    id="show-metrics"
                    className="h-5 w-5 rounded-full"
                />
                <label
                    htmlFor="show-metrics"
                    className="cursor-pointer text-sm"
                >
                    Show metrics
                </label>
            </div>

            <div className="flex items-center gap-3">
                <Select value={cropMode} onValueChange={setCropMode}>
                    <SelectTrigger className="h-8">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="auto">Auto</SelectItem>
                        <SelectItem value="square">Square</SelectItem>
                        <SelectItem value="instagram">
                            Instagram post
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex items-center gap-2">
                {/*  Download button với onClick handler */}
                <Button
                    onClick={onDownload}
                    variant="outline"
                    size="icon"
                    className="h-8"
                >
                    <Download />
                </Button>

                {/* Copy button */}
                <Button onClick={onCopy} className="h-8 bg-black text-white">
                    Copy
                </Button>
            </div>
        </div>
    );
}

export default Controls;
