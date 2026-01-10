"use server";

import { ProductCardProps } from "@/components/product-card";
import { products } from "@/db/schema";
import { db } from "@/lib";
import { adminPath } from "@/path";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const rejectProductAction = async (
  productId: ProductCardProps["id"]
) => {
  try {
    await db
      .update(products)
      .set({ status: "rejected" })
      .where(eq(products.id, productId));

    revalidatePath(adminPath());

    return {
      success: true,
      message: "Product rejected successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to reject products",
    };
  }
};
