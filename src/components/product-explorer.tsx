"use client";

import { products } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import { LucideClock, LucideSearch, LucideTrendingUp } from "lucide-react";
import ProductCard from "./product-card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

export type Product = InferSelectModel<typeof products>;
export type ProductExplorerProps = {
  featuredProducts: Product[];
};

const ProductExplorer = ({ featuredProducts }: ProductExplorerProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProductsResult = featuredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col gap-2 relative">
        <Label>Browse and discover amazing projects from community</Label>
        <LucideSearch className="absolute left-3 top-8 size-4" />
        <Input
          type="text"
          placeholder="Search products..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex gap-x-2">
          <Button>
            <LucideTrendingUp />
            Trending
          </Button>
          <Button variant="secondary">
            <LucideClock />
            Recent
          </Button>
        </div>
      </div>
      <div className="py-5">
        <p className="text-sm text-muted-foreground">
          Showing {filteredProductsResult.length} featured products
        </p>
      </div>
      <div className="grid-wrapper">
        {filteredProductsResult.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductExplorer;
