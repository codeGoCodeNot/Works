import Link from "next/link";
import ThemeSwitcher from "./theme/theme-switcher";
import { LucideCompass, LucideUser, LucideWaypoints } from "lucide-react";
import { explorePath, homePath } from "@/path";
import { Button } from "./ui/button";

const Header = () => {
  const isSignIn = false;

  return (
    <nav
      className="animate-slide-from-top
      fixed left-0 right-0 top-0 z-20
      supports-backdrop-filter:bg-background/60
      border-b bg-background/95 backdrop-blur
      w-full flex justify-between 
      py-2.5 px-5
      "
    >
      <Link href={homePath()} className="text-xl font-medium flex items-center">
        Work
        <LucideWaypoints className="h-6 w-6" />
      </Link>

      <Link href={explorePath()} className="text-sm flex gap-x-2 items-center">
        <LucideCompass size="20" />
        Explore
      </Link>

      <div className="flex items-center gap-x-2">
        <ThemeSwitcher />
        {isSignIn ? (
          <>
            <Button>Submit Project</Button>
            <Button variant="ghost" size="icon">
              <LucideUser />
            </Button>
            <Button variant="outline">Sign out</Button>
          </>
        ) : (
          <Button>Sign In</Button>
        )}
      </div>
    </nav>
  );
};

export default Header;
