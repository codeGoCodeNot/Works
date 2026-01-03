import LiveBadge from "./live-badge";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="relative overflow-hidden bg-linear-to-b from-background via-background">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center self-center text-center lg:py-24 py-16">
          <LiveBadge
            description="Join thousands of creators sharing their work here"
            className="px-4 py-2 mb-8 text-sm backdrop-blur-sm"
          />
          <h1>Share What You&apos;ve Built</h1>
          <p>
            This is a community space where creators can display their apps, AI
            tools, SaaS solutions, and innovative projects. It’s about real
            launches, true makers, and honest feedback.
          </p>
          <Button>Share your project</Button>
          <Button>Explore projects</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
