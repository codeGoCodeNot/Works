import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
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
        <Button>Submit Project</Button>
        <UserButton />
      </SignedIn>
    </>
  );
};

export default SignItems;
