import { LucideLoaderCircle } from "lucide-react";

type SpinnerProps = { className: string };

const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div className="flex-1 flex flex-col self-center justify-center items-center">
      <LucideLoaderCircle className={className} />
    </div>
  );
};

export default Spinner;
