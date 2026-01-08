import getProducts from "@/features/products/actions/get-products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = async () => {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = await params;

  return <div>Product Page {slug}</div>;
};

export default ProductPage;
