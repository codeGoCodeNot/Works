import SectionHeader from "@/components/section-header";
import { LucideCompass } from "lucide-react";

const ExploreProducts = () => {
  return (
    <div>
      <div className="wrapper">
        <SectionHeader
          title="All products"
          icon={<LucideCompass />}
          description="Browse and discover amazing projects from community"
        />
      </div>
    </div>
  );
};

export default ExploreProducts;
