type ProductPageProps = {
  params: Promise<{ productId: string }>;
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId } = await params;

  return <div>Product Page {productId}</div>;
};

export default ProductPage;
