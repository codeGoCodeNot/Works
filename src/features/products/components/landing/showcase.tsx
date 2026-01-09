"use cache";

import ProductExplorer from "@/components/product-explorer";
import SectionHeader from "@/components/section-header";
import { FlameIcon } from "lucide-react";
import getProducts from "../../actions/get-products";

const Showcase = async () => {
  const featuredProducts = await getProducts();
  return (
    <section className="bg-muted/20">
      <div className="wrapper">
        <div className="flex flex-1 items-center justify-between">
          <SectionHeader
            icon={<FlameIcon className="text-red-500 " />}
            title="Showcase"
            description="Community’s Best This Week"
          />
        </div>
        <ProductExplorer featuredProducts={featuredProducts} />
      </div>
    </section>
  );
};

export default Showcase;
