import { products } from "@/db/schema";
import { db } from "@/lib";
import { eq } from "drizzle-orm";

const getProducts = async () => {
  return await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"));
};

export default getProducts;
