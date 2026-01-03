type SectionHeaderProps = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

const SectionHeader = ({ icon, title, description }: SectionHeaderProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <p className="text-muted-foreground text-lg">{description}</p>
    </div>
  );
};

export default SectionHeader;
