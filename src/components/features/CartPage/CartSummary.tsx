import { Link } from "react-router-dom";
import OrderSummary from "../../common/OrderSummary/OrderSummary";
import "./CartSummary.css";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartSummaryProps {
  subtotal: number;
  count: number;
  items: CartItem[];
}

const CartSummary = ({ subtotal, count, items }: CartSummaryProps) => {
  return (
    <OrderSummary items={items} subtotal={subtotal}>
      <Link
        to={count > 0 ? "/checkout" : "#"}
        state={{ subtotal, count, items }}
        className={`cart-summary-checkout ${count === 0 ? "cart-summary-checkout--disabled" : ""}`}
        onClick={(e) => count === 0 && e.preventDefault()}
      >
        Checkout →
      </Link>
      <Link to="/products" className="cart-summary-continue">
        ← Continue shopping
      </Link>
    </OrderSummary>
  );
};

export default CartSummary;
