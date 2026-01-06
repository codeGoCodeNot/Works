import getProducts from "@/features/products/actions/get-products";

type ProductPageProps = {
  params: Promise<{ productId: string }>;
};

export const generateStaticParams = async () => {
  const products = await getProducts();
  return products.map((product) => ({ productId: product.id }));
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId } = await params;

  return <div>Product Page {productId}</div>;
};

export default ProductPage;
