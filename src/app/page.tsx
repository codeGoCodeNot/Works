import Spinner from "@/components/spinner";
import HeroSection from "@/features/products/components/landing/hero-section";
import LaunchedProducts from "@/features/products/components/landing/launched-products";
import Showcase from "@/features/products/components/landing/showcase";
import { Suspense } from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Showcase />

      <Suspense fallback={<Spinner className="animate-spin h-16 w-16" />}>
        <LaunchedProducts />
      </Suspense>
    </div>
  );
};

export default Home;
