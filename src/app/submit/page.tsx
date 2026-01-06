import SectionHeader from "@/components/section-header";
import ProductSubmitForm from "@/features/products/components/product-submit-form";
import { FlameIcon } from "lucide-react";

const SubmitPage = () => {
  return (
    <section className="py-20">
      <div className="wrapper">
        <SectionHeader
          title="Submit your product"
          icon={<FlameIcon className="text-red-500 h-10 w-10" />}
          description="Drop your awesome build here! We’ll check it out and launch it live for the world to see."
        />
        <div className="max-w-2xl mx-auto">
          <ProductSubmitForm />
        </div>
      </div>
    </section>
  );
};

export default SubmitPage;
