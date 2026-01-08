import { homePath } from "@/path";
import { LucideWaypoints } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import SignItems from "./sign-items";
import Spinner from "./spinner";

const Header = () => {
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

      <div className="flex items-center gap-x-2">
        <Suspense fallback={<Spinner className="animate-spin h-4 w-4" />}>
          <SignItems />
        </Suspense>
      </div>
    </nav>
  );
};

export default Header;
