import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShowcaseItem from "./ShowcaseItem";
import "./ProductShowcase.css";
import { fetchProducts } from "../../../utils/api";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const TAGS = ["Editor's pick", "New arrival", "Restocked"];
const SLOTS = 3;

const ProductShowcase = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then((res) => {
      const shuffled = [...res.data].sort(() => Math.random() - 0.5);
      setProducts(shuffled);
    });
  }, []);

  useEffect(() => {
    if (products.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  if (products.length === 0) return null;
  const groupStart = activeIndex - (activeIndex % SLOTS);
  const activeSlot = activeIndex % SLOTS;
  const slotItems = [0, 1, 2].map((slot) => ({
    ...products[(groupStart + slot) % products.length],
    tag: TAGS[slot],
  }));

  return (
    <div
      className="product-showcase"
      style={
        {
          "--bg-image": `url(${slotItems[activeSlot].image})`,
        } as React.CSSProperties
      }
      onClick={() => navigate(`/products/${slotItems[activeSlot].id}`)}
    >
      {slotItems.map((item, i) => (
        <ShowcaseItem
          key={`${item.id}-${i}`}
          isActive={i === activeSlot}
          item={item}
        />
      ))}
    </div>
  );
};

export default ProductShowcase;
