import "./Hero.css";
import Stats from "./Stats";
import ProductShowcase from "../ProductShowcase/ProductShowcase";

import { Link } from "react-router";
import Button from "../../common/Button/Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-edition">SUMMER 2026 · EDIT NO. 12</p>
        <h1 className="hero-title-first">Everyday objects,</h1>
        <h1 className="hero-title-second">thoughtfully sourced.</h1>
        <p className="hero-description">
          A small catalog of clothing, electronics and jewelry — chosen for the
          way they wear in, not the way they sell. Stocked weekly, priced
          honestly, shipped from Prague.
        </p>
        <div className="hero-actions">
          <Link to={"/products"}>
            <Button text="Show all products" />
          </Link>
          <Link to={"/contact"}>
            <button type="button" className="btn-secondary">
              Get in touch
            </button>
          </Link>
        </div>
        <Stats />
      </div>
      <ProductShowcase />
    </section>
  );
};

export default Hero;
