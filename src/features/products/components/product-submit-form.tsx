"use client";

import FormField from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import productForm from "../actions/product-form";

const ProductSubmitForm = () => {
  const handleSubmit = async (formData: FormData) => {
    await productForm(formData);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <FormField
        label="Product Name"
        id="name"
        name="name"
        placeholder="Your product name"
        required
        error=""
      />

      <FormField
        label="Slug"
        id="slug"
        name="slug"
        placeholder="your-product-name"
        required
        error=""
        helperText="The slug is a short, URL-safe version of your product name."
      />

      <FormField
        label="Description"
        id="description"
        name="description"
        placeholder="Tell us more about your product..."
        required
        error=""
        textarea
      />

      <FormField
        label="Tagline"
        id="tagline"
        name="tagline"
        placeholder="Write a short, catchy description for your product."
        required
        error=""
      />

      <FormField
        label="Website URL"
        id="websiteUrl"
        name="websiteUrl"
        placeholder="https://www.yourproduct.com"
        required
        error=""
        helperText="Enter your product's website or landing page"
      />

      <FormField
        label="Tags"
        id="tags"
        name="tags"
        placeholder="AI, Productivity, SaaS"
        required
        error=""
        helperText="Comma-separated tags (e.g., AI, SaaS, Productivity)"
      />

      <Button type="submit" size="lg" className="w-full">
        Submit Product
      </Button>
    </form>
  );
};

export default ProductSubmitForm;
