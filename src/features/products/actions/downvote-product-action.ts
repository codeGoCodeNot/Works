"use server";

import { products } from "@/db/schema";
import { db } from "@/lib";
import { homePath } from "@/path";
import { auth } from "@clerk/nextjs/server";
import { eq, sql } from "drizzle-orm";
import { refresh, revalidatePath } from "next/cache";

const downvoteProductAction = async (productId: string) => {
  try {
    const { userId, orgId } = await auth();
    console.log("DEBUG:", { userId, orgId });

    if (!userId) {
      console.log("User not signed in");
      return {
        success: false,
        errors: {},
        message: "You must be login to submit a product",
      };
    }

    if (!orgId) {
      console.log("User not a member of an organization");
      return {
        success: false,
        errors: {},
        message: "You must be a member of an organization to submit a product",
      };
    }

    await db
      .update(products)
      .set({
        voteCount: sql`GREATEST(0, vote_count - 1)`,
      })
      .where(eq(products.id, productId));

    revalidatePath(homePath());

    return {
      success: true,
      message: "Product upvoted successfully",
      error: {},
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to upvote products",
      voteCount: 0,
    };
  }
};

export default downvoteProductAction;
