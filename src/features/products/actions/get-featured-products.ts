import getProducts from "./get-products";

const getFeaturedProducts = async () => {
  const productsData = await getProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return productsData.filter(
    (product) =>
      product.createdAt &&
      new Date(product.createdAt.toISOString()) >= oneWeekAgo
  );
};

export default getFeaturedProducts;
