import React from "react";
import Header from "../components/common/Header/Header";
import Hero from "../components/features/Hero/Hero";
import FeaturedProducts from "../components/features/FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
