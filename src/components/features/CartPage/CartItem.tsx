import DeleteIcon from "@mui/icons-material/Delete";
import type { CartProduct } from "../../../context/CartContext";
import Quantity from "../../common/Quantity/Quantity";
import "./CartItem.css";

interface CartItemProps {
  item: CartProduct & { quantity: number };
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, delta: number) => void;
}

const CartItem = ({ item, onRemove, onQuantityChange }: CartItemProps) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image-wrap">
        <img src={item.image} alt={item.title} className="cart-item-image" />
      </div>

      <div className="cart-item-info">
        <span className="cart-item-category">{item.category}</span>
        <p className="cart-item-title">{item.title}</p>
      </div>

      <Quantity
        value={item.quantity}
        onChange={(newQty) => onQuantityChange(item.id, newQty - item.quantity)}
      />

      <div className="cart-item-pricing">
        <span className="cart-item-unit">${item.price.toFixed(2)} each</span>
        <span className="cart-item-subtotal">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </div>

      <button
        type="button"
        className="cart-item-remove"
        onClick={() => onRemove(item.id)}
        aria-label="Remove item"
      >
        <DeleteIcon fontSize="small" />
      </button>
    </div>
  );
};

export default CartItem;
