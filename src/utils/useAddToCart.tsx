import { useState } from "react";
import { useCart } from "../context/CartContext";
import type { CartProduct } from "../context/CartContext";

export const useAddToCart = () => {
  const { addItem } = useCart()!;
  const [added, setAdded] = useState<Set<number>>(new Set());

  const handleAdd = (product: CartProduct) => {
    addItem(product);
    setAdded((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAdded((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 2000);
  };

  return { added, handleAdd };
};
