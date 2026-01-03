import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { explorePath } from "@/path";
import { FlameIcon, MoveUpRight } from "lucide-react";
import Link from "next/link";

const Showcase = () => {
  const card = (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex flex-1 items-center justify-between mb-8">
          <SectionHeader
            icon={<FlameIcon className="text-red-500 " />}
            title="Showcase"
            description="Community’s Best This Week"
          />
          <Button asChild variant="secondary" className="hidden sm:flex">
            <Link href={explorePath()}>
              View all <MoveUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
