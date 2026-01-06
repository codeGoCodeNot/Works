import { connection } from "next/server";
import { products } from "@/db/schema";
import { db } from "@/lib";
import { desc, eq } from "drizzle-orm";

export const getAllProducts = async () => {
  return await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.voteCount));
};

const getFeaturedProducts = async () => {
  await connection();

  const productsData = await getAllProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return productsData.filter(
    (product) =>
      product.createdAt &&
      new Date(product.createdAt.toISOString()) >= oneWeekAgo
  );
};

export default getFeaturedProducts;
