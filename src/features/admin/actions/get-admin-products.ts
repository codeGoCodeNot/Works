import { products } from "@/db/schema";
import { db } from "@/lib";
import { desc } from "drizzle-orm";

const getAdminProducts = async () => {
  "use cache";
  return await db.select().from(products).orderBy(desc(products.voteCount));
};

export default getAdminProducts;
