import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type StatsCardProps = {
  Icon: LucideIcon;
  value: string;
  label: string;
  hasBorder?: boolean;
};

const StatsCard = ({ Icon, value, label, hasBorder }: StatsCardProps) => {
  return (
    <div className={cn("space-y-2", hasBorder && "border-x border-border")}>
      <div className="flex items-center flex-1 justify-center gap-2">
        <Icon className="size-5 text-primary/70" />
        <p className="text-3xl sm:text-4xl font-bold">{value}</p>
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default StatsCard;
