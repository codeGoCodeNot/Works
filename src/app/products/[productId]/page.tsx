import { cache } from "react";

type ProductPageProps = {
  params: Promise<{ productId: string }>;
};

const ProductPage = cache(async ({ params }: ProductPageProps) => {
  const { productId } = await params;

  return <div>Product Page {productId}</div>;
});

export default ProductPage;
