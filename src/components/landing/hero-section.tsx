import Link from "next/link";
import LiveBadge from "../live-badge";
import { Button } from "../ui/button";
import { explorePath, submitPath } from "@/path";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-linear-to-b from-background via-background">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center self-center text-center lg:py-24 py-16">
          <LiveBadge
            description="Join thousands of creators sharing their work here"
            className="px-4 py-2 mb-8 text-sm backdrop-blur-sm"
          />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">
            Share What You&apos;ve Built
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground, mb-10 leading-relaxed">
            This is a community space where creators can display their apps, AI
            tools, SaaS solutions, and innovative projects. It’s about real
            launches, true makers, and honest feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button asChild size="lg" className="text-base px-8 shadow-lg">
              <Link href={submitPath()}>Share your project</Link>
            </Button>
            <Button asChild size="lg" className="text-base px-8 shadow-lg">
              <Link href={explorePath()}>Explore projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
