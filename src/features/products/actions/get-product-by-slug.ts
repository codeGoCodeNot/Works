import { products } from "@/db/schema";
import { db } from "@/lib";
import { eq } from "drizzle-orm";

const getProductBySLug = async (slug: string) => {
  const product = await db
    .select()
    .from(products)
    .where(eq(products.slug, slug));

  return product?.[0] ?? null;
};

export default getProductBySLug;
