import { submitPath } from "@/path";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import CustomUserButton from "./custom-user-button";
import ThemeSwitcher from "./theme/theme-switcher";
import { Button } from "./ui/button";

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
        <CustomUserButton />
      </SignedIn>
    </>
  );
};

export default SignItems;
