import { products } from "@/db/schema";
import { db } from "@/lib";
import { desc, eq } from "drizzle-orm";

const getProducts = async () => {
  return await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.voteCount));
};

export default getProducts;
