import { useState, useEffect } from "react";
import ShowcaseItem from "./ShowcaseItem";
import "./ProductShowcase.css";

const items = [
  {
    id: 1,
    tag: "Editor's pick",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  },
  {
    id: 2,
    tag: "New arrival",
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  },
  {
    id: 3,
    tag: "Restocked",
    title: "Mens Cotton Jacket",
    price: 55.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  },
];

const ProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="product-showcase"
      style={{ '--bg-image': `url(${items[activeIndex].image})` } as React.CSSProperties}
    >
      {items.map((item, i) => (
        <ShowcaseItem key={item.id} isActive={activeIndex === i} item={item} />
      ))}
    </div>
  );
};

export default ProductShowcase;
