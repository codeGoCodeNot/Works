import { products } from "@/db/schema";
import { db } from "@/lib";
import { desc, eq } from "drizzle-orm";

const getProducts = async () => {
  "use cache";
  return await db.select().from(products).orderBy(desc(products.voteCount));
};

export default getProducts;
