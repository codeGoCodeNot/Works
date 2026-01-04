import HeroSection from "@/features/products/components/landing/hero-section";
import LaunchedProducts from "@/features/products/components/landing/launched-products";
import Showcase from "@/features/products/components/landing/showcase";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Showcase />
      <LaunchedProducts />
    </div>
  );
};

export default Home;
