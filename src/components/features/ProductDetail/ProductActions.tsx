import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import type { CartProduct } from "../../../context/CartContext";
import "./ProductActions.css";
import Quantity from "../../common/Quantity/Quantity";

interface Props {
  product: CartProduct;
}

const ProductActions = ({ product }: Props) => {
  const { addItem } = useCart()!;
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pdp-actions">
      <Quantity value={qty} onChange={setQty} />
      <button
        type="button"
        className={`pdp-btn-cart${added ? " pdp-btn-cart--added" : ""}`}
        onClick={handleAddToCart}
      >
        {added ? "Added" : "Add to cart"}
      </button>
    </div>
  );
};

export default ProductActions;
