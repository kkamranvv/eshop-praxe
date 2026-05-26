import { useState, useEffect } from "react";
import ShowcaseItem from "./ShowcaseItem";
import "./ProductShowcase.css";

const ITEM_COUNT = 3;

const ProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ITEM_COUNT);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="product-showcase">
      <ShowcaseItem isActive={activeIndex === 0} />
      <ShowcaseItem isActive={activeIndex === 1} />
      <ShowcaseItem isActive={activeIndex === 2} />
    </div>
  );
};

export default ProductShowcase;
