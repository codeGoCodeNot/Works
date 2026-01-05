import { products } from "@/db/schema";
import { db } from "@/lib";

const getProducts = async () => {
  return await db.select().from(products);
};

export default getProducts;
