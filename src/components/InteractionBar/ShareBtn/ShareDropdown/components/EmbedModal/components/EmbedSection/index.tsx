import { Button } from "@/components/ui/button";

type Props = {
    embedCode: string;
    handleCopy: () => void;
};

function EmbedSection({ embedCode, handleCopy }: Props) {
    return (
        <div className="border-t p-6 pt-5">
            <div className="text-foreground bg-muted flex items-center overflow-x-auto rounded-xl p-4 font-mono text-sm">
                {/* Embed preview (short) */}
                <code className="block flex-1 break-all">
                    {embedCode.length > 80
                        ? embedCode.slice(0, 56) + "..."
                        : embedCode}
                </code>

                {/* Copy button */}
                <Button onClick={handleCopy}>Copy</Button>
            </div>
        </div>
    );
}

export default EmbedSection;
