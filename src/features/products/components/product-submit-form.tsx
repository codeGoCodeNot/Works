"use client";

import FormField from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import productFormAction, {
  FormStateProps,
} from "../actions/product-form-action";
import { LucideRocket } from "lucide-react";
import Spinner from "@/components/spinner";
import { cn } from "@/lib/utils";

const initialState: FormStateProps = {
  success: false,
  errors: {},
  message: "",
};

const ProductSubmitForm = () => {
  const [actionState, formAction, isPending] = useActionState(
    productFormAction,
    initialState
  );

  const { errors, message, success } = actionState;

  return (
    <>
      {message && (
        <div
          className={cn(
            "p-4 rounded-md border mb-5",
            success
              ? "bg-primary/10 border-primary text-primary"
              : "bg-destructive/10 border-destructive text-destructive"
          )}
          role="alert"
          aria-live="polite"
        >
          {message}
        </div>
      )}
      <form className="space-y-6" action={formAction}>
        <FormField
          label="Product Name"
          id="name"
          name="name"
          placeholder="Your product name"
          required
          onChange={() => {}}
          error={errors?.name ?? []}
        />

        <FormField
          label="Slug"
          id="slug"
          name="slug"
          placeholder="your-product-name"
          required
          onChange={() => {}}
          error={errors?.slug ?? []}
          helperText="The slug is a short, URL-safe version of your product name."
        />

        <FormField
          label="Description"
          id="description"
          name="description"
          placeholder="Tell us more about your product..."
          required
          onChange={() => {}}
          error={errors?.description ?? []}
          textarea
        />

        <FormField
          label="Tagline"
          id="tagline"
          name="tagline"
          placeholder="Write a short, catchy description for your product."
          required
          onChange={() => {}}
          error={errors?.tagline ?? []}
        />

        <FormField
          label="Website URL"
          id="websiteUrl"
          name="websiteUrl"
          placeholder="https://www.yourproduct.com"
          required
          onChange={() => {}}
          error={errors?.websiteUrl ?? []}
          helperText="Enter your product's website or landing page"
        />

        <FormField
          label="Tags"
          id="tags"
          name="tags"
          placeholder="AI, Productivity, SaaS"
          required
          onChange={() => {}}
          error={errors?.tags ?? []}
          helperText="Comma-separated tags (e.g., AI, SaaS, Productivity)"
        />

        <Button type="submit" size="lg" className="w-full flex items-center">
          {isPending ? (
            <Spinner className="animate-spin" />
          ) : (
            <>
              <LucideRocket className="text-red-500 fill-red-500" />
              Submit Product
            </>
          )}
        </Button>
      </form>
    </>
  );
};

export default ProductSubmitForm;
