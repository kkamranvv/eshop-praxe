import React from "react";

import "./Hero.css";
import Stats from "./Stats";
import ProductShowcase from "../ProductShowcase/ProductShowcase";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-edition">SPRING 2026 · EDIT NO. 12</p>
        <h1 className="hero-title-first">Everyday objects,</h1>
        <h1 className="hero-title-second">thoughtfully sourced.</h1>
        <p className="hero-description">
          A small catalog of clothing, electronics and jewelry — chosen for the
          way they wear in, not the way they sell. Stocked weekly, priced
          honestly, shipped from Prague.
        </p>
        <div className="hero-actions">
          <button type="button" className="btn-primary">
            Shop all products →
          </button>
          <button type="button" className="btn-secondary">
            Get in touch
          </button>
        </div>
        <Stats />
      </div>
      <ProductShowcase />
    </section>
  );
};

export default Hero;
