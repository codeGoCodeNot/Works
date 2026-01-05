import { featuredProducts } from "@/db/featured-products";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { products } from "./schema";

const db = drizzle(process.env.DATABASE_URL as string);

const main = async () => {
  console.log("🌱 Seeding database...");

  await db.delete(products);
  console.log("cleared existing data");

  for (const product of featuredProducts) {
    await db.insert(products).values({
      name: product.name,
      slug: product.slug,
      tagline: product.tagline,
      description: product.description,
      websiteUrl: product.websiteUrl,
      tags: product.tags,
      voteCount: product.voteCount,
      createdAt: product.createdAt,
      approvedAt: product.approvedAt,
      status: product.status,
      submittedBy: product.submittedBy,
    });

    console.log(
      `Added product ${product.name} (${product.voteCount || 0} votes)`
    );

    const insertedProducts = await db.select().from(products);
    console.log(
      `\n🎉 Successfully seeded ${insertedProducts.length} products!`
    );

    console.log("\n📦 Products in database");

    for (const product of insertedProducts) {
      console.log(
        `- ${product.name} (${product.slug}) - ${product.voteCount} votes`
      );
    }
  }
};

main()
  .catch((error) => {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  })
  .finally(() => {
    console.log("\n Seeding complete");
    process.exit(0);
  });
