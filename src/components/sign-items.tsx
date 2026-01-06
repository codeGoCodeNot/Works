import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import ThemeSwitcher from "./theme/theme-switcher";
import { Button } from "./ui/button";
import Link from "next/link";
import { submitPath } from "@/path";

const SignItems = () => {
  return (
    <>
      <SignedOut>
        <SignInButton />
        <SignUpButton>
          <Button>Sign Up</Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <ThemeSwitcher />
        <Button asChild>
          <Link href={submitPath()}>Submit Project</Link>
        </Button>
        <UserButton />
      </SignedIn>
    </>
  );
};

export default SignItems;
