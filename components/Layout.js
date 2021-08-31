import Category from "./Category";
import HeroSection from "./HeroSection";

const Layout = () => {
  return (
    <div>
      <HeroSection />
      <main className="max-w-[1200px] m-auto py-5">
        <Category />
      </main>
    </div>
  );
};

export default Layout;
