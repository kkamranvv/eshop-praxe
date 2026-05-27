import React from "react";
import Header from "../components/common/Header/Header";
import Hero from "../components/features/Hero/Hero";
import FeaturedProducts from "../components/features/FeaturedProducts/FeaturedProducts";
import Footer from "../components/common/Footer/Footer";
import Checkout from "./Checkout/Checkout";
import Benefits from "../components/features/Benefits/Benefits";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Checkout />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Home;
