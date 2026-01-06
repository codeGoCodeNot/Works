import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProductSubmitForm = () => {
  return (
    <form className="space-y-6">
      <Label htmlFor="name">Product Name</Label>
      <Input id="name" name="name" placeholder="Your product name" required />

      <Label htmlFor="slug">Slug</Label>
      <Input id="slug" name="slug" placeholder="Your-product-name" required />
    </form>
  );
};

export default ProductSubmitForm;
