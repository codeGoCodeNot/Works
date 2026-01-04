type EmptyStateProps = {
  message: string;
  icon: React.ReactElement;
};

const EmptyState = ({ message, icon }: EmptyStateProps) => {
  return (
    <div className="empty-state">
      {icon}
      <p className="text-lg text-muted-foreground">{message}</p>
    </div>
  );
};

export default EmptyState;
