import { homePath } from "@/path";
import { MessageSquareWarning } from "lucide-react";
import Link from "next/link";
import { cloneElement } from "react";
import { Button } from "./ui/button";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<{ className?: string }>;
  button?: React.ReactNode;
};

// this component use by ticket page
const Placeholder = ({
  label,
  icon = <MessageSquareWarning />,
  button = (
    <Button asChild className="bg-[#e7000b] hover:bg-red-500">
      <Link href={homePath()}>Go back to tickets</Link>
    </Button>
  ),
}: PlaceholderProps) => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {cloneElement(icon, {
        className: "w-16 h-16",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {button}
    </div>
  );
};

export default Placeholder;
