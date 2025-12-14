import { Button } from "@/components/ui/button";

type Props = {
    embedCode: string;
    handleCopy: () => void;
};

function EmbedSection({ embedCode, handleCopy }: Props) {
    return (
        <div className="border-t p-6 pt-5">
            <div className="flex items-center overflow-x-auto rounded-xl bg-neutral-100 p-4 font-mono text-sm text-black">
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
