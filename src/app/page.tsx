import SectionHeader from "@/components/section-header";
import Spinner from "@/components/spinner";
import HeroSection from "@/features/products/components/landing/hero-section";
import LaunchedProducts from "@/features/products/components/landing/launched-products";
import Showcase from "@/features/products/components/landing/showcase";
import { LucideRocket } from "lucide-react";
import { Suspense } from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Showcase />

      <SectionHeader
        title="Recently Launched"
        icon={<LucideRocket />}
        description="The most recent launched in platform last week"
      >
        <Suspense fallback={<Spinner className="animate-spin h-16 w-16" />}>
          <LaunchedProducts />
        </Suspense>
      </SectionHeader>
    </div>
  );
};

export default Home;
