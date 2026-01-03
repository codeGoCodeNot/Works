import ThemeSwitcher from "./theme/theme-switcher";
import { LucideWaypoints } from "lucide-react";

const Header = () => {
  return (
    <nav
      className="animate-slide-from-top supports-backdrop-blur:bg-background/60
      fixed left-0 right-0 top-0 z-20
      border-b bg-background/95 backdrop-blur
      w-full flex justify-between 
      py-2.5 px-5
      "
    >
      <span className="text-xl font-medium flex items-center">
        Work
        <LucideWaypoints className="h-6 w-6" />
      </span>
      <ThemeSwitcher />
    </nav>
  );
};

export default Header;
