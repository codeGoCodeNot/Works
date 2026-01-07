"use server";

import { products } from "@/db/schema";
import { db } from "@/lib";
import { auth, currentUser } from "@clerk/nextjs/server";
import z from "zod";
import { productSchema } from "../validation/product-validation";

export type FormStateProps = {
  success: boolean;
  errors: Record<string, string[]>;
  message: string;
};

const productFormAction = async (
  prevState: FormStateProps,
  formData: FormData
) => {
  console.log(formData);

  try {
    const { userId, orgId } = await auth();

    if (!userId) {
      return {
        success: false,
        errors: {},
        message: "You must be login to submit a product",
      };
    }

    if (!orgId) {
      return {
        success: false,
        errors: {},
        message: "You must be a member of an organization to submit a product",
      };
    }

    // data
    const user = await currentUser();
    const userEmail = user?.emailAddresses[0]?.emailAddress || "anonymous";

    const rawFormData = Object.fromEntries(formData.entries());

    // validate data
    const validatedData = productSchema.safeParse(rawFormData);

    if (!validatedData.success) {
      return {
        success: false,
        errors: validatedData.error.flatten().fieldErrors,
        message: "Invalid data",
      };
    }

    const { name, slug, tagline, description, websiteUrl, tags } =
      validatedData.data;

    const tagsArray = tags ? tags.filter((tag) => typeof tag === "string") : [];

    // transform data
    await db.insert(products).values({
      name,
      slug,
      tagline,
      description,
      websiteUrl,
      tags: tagsArray,
      status: "pending",
      submittedBy: userEmail,
      organizationId: orgId,
      userId,
    });

    return {
      success: true,
      errors: {},
      message: "Product submitted successfully! It will be reviewed shortly.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        message: "Validation failed",
      };
    }

    return {
      success: false,
      errors: {},
      message: "Failed to submit product",
    };
  }
};

export default productFormAction;
