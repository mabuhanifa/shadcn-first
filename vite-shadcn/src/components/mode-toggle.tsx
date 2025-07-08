import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
