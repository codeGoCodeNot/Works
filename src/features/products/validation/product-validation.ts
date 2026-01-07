import z from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(120, "Name must be less than 120 characters"),
  slug: z
    .string()
    .min(3, "Slug must be at least 3 characters")
    .max(120, "Slug must be less than 120 characters")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must be lowercase and contain only letters and numbers"
    ),
  tagline: z.string().min(3, "Tagline is required"),
  description: z.string().optional(),
  websiteUrl: z.string().min(5, "Website URL is required"),
  tags: z
    .string()
    .min(1, "At least one tag is required")
    .transform((val) => val.split(",").map((tag) => tag.trim().toLowerCase())),
});
