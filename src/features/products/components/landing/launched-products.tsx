import SectionHeader from "@/components/section-header";
import { LucideCalendar, LucideRocket } from "lucide-react";
import ProductCard from "../../../../components/product-card";
import EmptyState from "@/components/empty-state";
import getFeaturedProducts from "../../actions/get-featured-products";

const LaunchedProducts = async () => {
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      {featuredProducts.length > 0 ? (
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <EmptyState
          message="No products Launched this week"
          icon={
            <LucideCalendar className="size-12 text-muted-foreground/50 mx-auto mb-4" />
          }
        />
      )}
    </>
  );
};

export default LaunchedProducts;
