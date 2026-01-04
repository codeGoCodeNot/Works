import { LucideGithub, LucideLinkedin, LucideWaypoints } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="border-t bg-muted/20
      w-full flex justify-center
      gap-x-5
      py-4 px-5 mt-12
      text-sm
      "
    >
      <div className="flex flex-col items-center gap-y-2">
        <div className="flex gap-x-4">
          <span className="flex">
            Work
            <LucideWaypoints className="h-6 w-6" />
          </span>
          <span>Inc. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-x-2 ">
          <a
            href="https://github.com/codeGoCodeNot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-primary"
          >
            <LucideGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/johnsen-berdin-a30b4a383/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-primary"
          >
            <LucideLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
