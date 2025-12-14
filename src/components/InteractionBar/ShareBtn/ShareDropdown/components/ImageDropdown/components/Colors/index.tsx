import { cn } from "@/lib/utils";

type Props = {
    selectedTheme: string;
    setSelectedTheme: any;
};

function Colors({ selectedTheme, setSelectedTheme }: Props) {
    return (
        <div className="flex gap-3">
            <button
                onClick={() => setSelectedTheme("light")}
                className={cn(
                    "h-5 w-5 cursor-pointer rounded-full border-2 bg-white",
                    selectedTheme === "light"
                        ? "border-blue-600"
                        : "border-transparent",
                )}
            />
            <button
                onClick={() => setSelectedTheme("dark")}
                className={cn(
                    "h-5 w-5 cursor-pointer rounded-full border-2 bg-black",
                    selectedTheme === "dark"
                        ? "border-blue-600"
                        : "border-transparent",
                )}
            />
        </div>
    );
}

export default Colors;
