import { useEffect } from "react";
import Header from "../components/common/Header/Header";
import Hero from "../components/features/Hero/Hero";
import FeaturedProducts from "../components/features/FeaturedProducts/FeaturedProducts";
import Footer from "../components/common/Footer/Footer";
import Benefits from "../components/features/Benefits/Benefits";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Home;
