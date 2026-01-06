type SectionHeaderProps = {
  icon: React.ReactElement;
  title: string;
  description: string;
  children: React.ReactNode;
};

const SectionHeader = ({
  icon,
  title,
  description,
  children,
}: SectionHeaderProps) => {
  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <div className="flex items-center gap-2 mb-3">
          {icon}
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        <p className="text-muted-foreground text-lg">{description}</p>
        {children}
      </div>
    </section>
  );
};

export default SectionHeader;
