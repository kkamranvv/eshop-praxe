import { Link } from "react-router-dom";
import "./CartSummary.css";

interface CartSummaryProps {
  subtotal: number;
  count: number;
}

const CartSummary = ({ subtotal, count }: CartSummaryProps) => {
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
      
      <Link 
        to={count > 0 ? "/checkout" : "#"}
        state={{ subtotal, count }}
        className={`cart-summary-checkout ${count === 0 ? "cart-summary-checkout--disabled" : ""}`}
        onClick={(e) => count === 0 && e.preventDefault()}>
        Checkout →
      </Link>
      
      <Link to="/products" className="cart-summary-continue">
        ← Continue shopping
      </Link>
    </div>
  );
};

export default CartSummary;
