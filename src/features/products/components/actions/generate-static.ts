import getFeaturedProducts from "./get-featured-products";

const generateStaticParams = async () => {
  const products = await getFeaturedProducts();
  return products.map((product) => ({ productId: product.id }));
};

export default generateStaticParams;
