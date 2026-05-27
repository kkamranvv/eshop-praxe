import { useState } from "react";
import { useCart } from "../context/CartContext";

export const useAddToCart = () => {
  const { addItem } = useCart();
  const [added, setAdded] = useState<Set<number>>(new Set());

  const handleAdd = (id: number) => {
    addItem();
    setAdded((prev) => new Set(prev).add(id));
    setTimeout(() => {
      setAdded((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 2000);
  };

  return { added, handleAdd };
};
