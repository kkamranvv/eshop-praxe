import { Link } from "react-router-dom";
import "./CartSummary.css";

interface CartSummaryProps {
  subtotal: number;
}

const CartSummary = ({ subtotal }: CartSummaryProps) => {
  return (
    <div className="cart-summary">
      <p className="cart-summary-heading">ORDER SUMMARY</p>
      <div className="cart-summary-row">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="cart-summary-row">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="cart-summary-divider" />
      <div className="cart-summary-row cart-summary-total">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <button type="button" className="cart-summary-checkout">
        Checkout →
      </button>
      <Link to="/products" className="cart-summary-continue">
        ← Continue shopping
      </Link>
    </div>
  );
};

export default CartSummary;
