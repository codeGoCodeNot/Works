import getFeaturedProducts from "@/features/products/actions/get-featured-products";
import { cache } from "react";

type ProductPageProps = {
  params: Promise<{ productId: string }>;
};

export const generateStaticParams = async () => {
  const products = await getFeaturedProducts();
  return products.map((product) => ({ productId: product.id }));
};

const ProductPage = cache(async ({ params }: ProductPageProps) => {
  const { productId } = await params;

  return <div>Product Page {productId}</div>;
});

export default ProductPage;
