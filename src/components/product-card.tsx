import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { products } from "@/db/schema";
import { productPath } from "@/path";
import { InferSelectModel } from "drizzle-orm";
import { LucideStar } from "lucide-react";
import Link from "next/link";
import VotingButtons from "./voting-buttons";

export type ProductCardProps = InferSelectModel<typeof products>;

const ProductCard = (product: ProductCardProps) => {
  return (
    <Link href={productPath(product.slug)}>
      <Card
        className="group transition duration-200 transform hover:-translate-y-2 hover:shadow-xl 
      border-solid border-gray-400 min-h-[200px]
      animate-fade-from-top
      "
      >
        <CardHeader>
          <div className="flex items-center gap-x-4 justify-start">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-x-2">
                <CardTitle className="text-lg group-hover:text-primary/80 transition-colors">
                  {product.name}
                </CardTitle>
                {product.voteCount > 10 && (
                  <Badge className="gap-x-1 bg-primary text-primary-foreground">
                    <LucideStar className="fill-current" />
                    Featured
                  </Badge>
                )}
              </div>
              <CardDescription>{product.description}</CardDescription>
            </div>

            <VotingButtons
              productId={product.id}
              voteCount={product.voteCount}
            />
          </div>
        </CardHeader>
        <CardFooter>
          <div className="flex flex-1 items-center gap-x-2">
            {product.tags?.map((tag) => (
              <Badge variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
