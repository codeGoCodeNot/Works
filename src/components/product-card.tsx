import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { products } from "@/db/schema";
import { cn } from "@/lib/utils";
import { productPath } from "@/path";
import { InferSelectModel } from "drizzle-orm";
import { LucideChevronDown, LucideChevronUp, LucideStar } from "lucide-react";
import Link from "next/link";

type ProductCardProps = InferSelectModel<typeof products>;

const ProductCard = (product: ProductCardProps) => {
  const hasVoted = false;

  return (
    <Link href={productPath(product.id)}>
      <Card
        className="group transition duration-200 transform hover:-translate-y-2 hover:shadow-xl 
      border-solid border-gray-400 min-h-[180px]
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
            <div className="flex flex-col items-center">
              <Button
                variant="ghost"
                size="icon-sm"
                className={cn(
                  "text-primary",
                  hasVoted
                    ? "bg-primary/10 text-primary hover:bg-primary/20"
                    : "hover:bg-primary/10 hover:text-primary"
                )}
              >
                <LucideChevronUp />
              </Button>
              <span className="text-sm font-semibold transition-colors text-foreground">
                5
              </span>
              <Button
                variant="ghost"
                size="icon-sm"
                className={cn(
                  "text-primary",
                  hasVoted
                    ? "hover:text-destructive"
                    : "opacity-50 cursor-not-allowed"
                )}
              >
                <LucideChevronDown />
              </Button>
            </div>
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
