import { Badge } from "./ui/badge";

type LiveBadgeProps = {
  description: string;
  className: string;
};

const LiveBadge = ({ description, className }: LiveBadgeProps) => {
  return (
    <Badge variant="outline" className={className}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
      </span>
      <span className="text-muted-foreground">{description}</span>
    </Badge>
  );
};

export default LiveBadge;
