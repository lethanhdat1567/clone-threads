import { useTheme } from "@/components/ui/theme-provider";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useState } from "react";

function DetailSection({ setMode }: { setMode: any }) {
  const { theme, setTheme } = useTheme();
  const [activeTheme, setActiveTheme] = useState(theme || "dark");

  const handleThemeChange = (newTheme: "dark" | "light" | "system") => {
    setActiveTheme(newTheme);
    setTheme(newTheme);
  };

  const getButtonPosition = () => {
    switch (activeTheme) {
      case "light":
        return "translate-x-0";
      case "dark":
        return "translate-x-full";
      case "system":
        return "translate-x-[200%]";
      default:
        return "translate-x-full";
    }
  };

  return (
    <div className="p-4">
      <div className="mb-6 flex items-center">
        <span className="flex h-7 w-7 items-center justify-center">
          <ArrowLeft
            size={16}
            className="text-foreground cursor-pointer"
            onClick={() => setMode(false)}
          />
        </span>
        <span className="text-foreground flex-1 text-center text-base font-medium">
          Appearance
        </span>
      </div>

      <div className="bg-secondary relative flex h-11 rounded-xl p-1">
        {/* Sliding background indicator */}
        <div
          className={`bg-accent absolute top-1 left-1 h-[calc(100%-8px)] w-[calc(33.333%-4px)] rounded-lg transition-transform duration-300 ease-out ${getButtonPosition()}`}
        />

        <button
          onClick={() => handleThemeChange("light")}
          className={`relative z-10 flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg transition-colors duration-200 ${
            activeTheme === "light"
              ? "text-foreground bg-background border-muted"
              : "text-muted-foreground"
          }`}
        >
          <Sun size={18} />
        </button>
        <button
          onClick={() => handleThemeChange("dark")}
          className={`relative z-10 flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg transition-colors duration-200 ${
            activeTheme === "dark"
              ? "text-foreground bg-card border-muted-foreground"
              : "text-muted-foreground"
          }`}
        >
          <Moon size={18} />
        </button>
        <button
          onClick={() => handleThemeChange("system")}
          className={`relative z-10 flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg transition-colors duration-200 ${
            activeTheme === "system"
              ? "text-foreground bg-card border-muted-foreground"
              : "text-muted-foreground"
          }`}
        >
          <span className="text-sm font-medium">Auto</span>
        </button>
      </div>
    </div>
  );
}

export default DetailSection;
