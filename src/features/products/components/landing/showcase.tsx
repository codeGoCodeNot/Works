"use cache";

import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { explorePath } from "@/path";
import { FlameIcon, MoveUpRight } from "lucide-react";
import Link from "next/link";
import getProducts from "../../actions/get-products";
import ProductCard from "./product-card";

const Showcase = async () => {
  const featuredProducts = await getProducts();
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex flex-1 items-center justify-between mb-8">
          <SectionHeader
            icon={<FlameIcon className="text-red-500 " />}
            title="Showcase"
            description="Community’s Best This Week"
          />
          <Button asChild variant="secondary" className="hidden sm:flex">
            <Link href={explorePath()}>
              View all <MoveUpRight />
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
