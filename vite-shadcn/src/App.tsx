import { Blog7 } from "./components/blocks/blog7";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center ">
      <Button>Click me</Button>
      <ModeToggle />
      <Blog7 />
    </div>
  );
}
