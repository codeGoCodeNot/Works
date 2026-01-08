"use cache";

import SectionHeader from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import VotingButtons from "@/components/voting-buttons";
import getProductBySlug from "@/features/products/actions/get-product-by-slug";
import getProducts from "@/features/products/actions/get-products";
import { explorePath } from "@/path";
import {
  LucideArrowLeft,
  LucideCalendar,
  LucideExternalLink,
  LucideRocket,
  LucideUser,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = async () => {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();
  const { name, description, websiteUrl, tags, tagline } = product;

  return (
    <div className="py-20">
      <div className="wrapper">
        <Link
          href={explorePath()}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <LucideArrowLeft />
          Back to Explore
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-6">
              <div className="flex-1 min-w-0">
                <div className="mb-6">
                  <SectionHeader
                    title={name}
                    icon={<LucideRocket />}
                    description={tagline ?? ""}
                  />
                </div>
                <div className="flex flex-wrap gap-2 pl-7">
                  {tags?.map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="prose prose-neutral dark:prose-invert max-w-none pl-7">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="pl-7">
              <div className="border rounded-lg p-6 bg-primary/10">
                <h2 className="text-lg font-semibold mb-4">Product Details</h2>
                <div className="space-y-3">
                  {[
                    {
                      label: "Launched:",
                      value: new Date(
                        product.createdAt?.toISOString() ?? ""
                      ).toLocaleDateString(),
                      icon: LucideCalendar,
                    },
                    {
                      label: "Submitted by:",
                      value: product.submittedBy,
                      icon: LucideUser,
                    },
                  ].map(({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 text-sm"
                    >
                      {Icon && (
                        <Icon className="size-4 text-muted-foreground" />
                      )}
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 mt-20">
            <div className="sticky top-24 space-y-4">
              <div className="border rounded-lg p-10 bg-background">
                <div className="flex flex-col gap-y-5 items-center justify-center">
                  <span className="text-sm text-muted-foreground">
                    Support this product
                  </span>
                  <h1 className="text-2xl font-semibold">{name}</h1>
                </div>
              </div>
              {websiteUrl && (
                <Button asChild className="w-full rounded-lg" variant="default">
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website <LucideExternalLink className="size-4 ml-2" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
