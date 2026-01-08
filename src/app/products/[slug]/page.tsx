"use cache";

import getProductBySlug from "@/features/products/actions/get-product-by-slug";
import getProducts from "@/features/products/actions/get-products";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = async () => {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();
  const { name, description, websiteUrl, tags, voteCount } = product;

  return (
    <div className="flex justify-center items-center">
      <h1 className="text-6xl">
        {name} {slug} {description}
      </h1>
    </div>
  );
};

export default ProductPage;
