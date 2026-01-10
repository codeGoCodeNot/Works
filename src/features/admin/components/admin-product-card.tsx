import { ProductCardProps } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const AdminProductCard = (product: ProductCardProps) => {
  return (
    <div className="border rounded-lg p-6 bg-background hover:shadow-md transition-shadow">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="flex-1 min-w-0 space-y-4">
          <CardTitle>{product.name}</CardTitle>
          <Badge
            className={cn(
              product.status === "pending" &&
                "bg-yellow-600/10 text-yellow-600 border-yellow-600",
              product.status === "approved" &&
                "bg-green-500/10 text-green-600 border-green-500",
              product.status === "rejected" &&
                "bg-red-500/10 text-red-500 border-red-500"
            )}
          >
            {product.status}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
