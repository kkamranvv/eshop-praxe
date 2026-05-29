import { Link } from "react-router-dom";
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

const SHIPPING = 6.50;

const CartSummary = ({ subtotal, count, items }: CartSummaryProps) => {
    const total = subtotal + (subtotal > 0 ? SHIPPING : 0);

    return (
        <div className="cart-summary">
            <p className="cart-summary-heading">ORDER SUMMARY</p>

            <div className="cart-summary-items">
                {items.map((item) => (
                    <div key={item.id} className="cart-summary-product">
                        <img src={item.image} alt={item.title} className="cart-summary-product-img" />
                        <div className="cart-summary-product-info">
                            <span className="cart-summary-product-title">{item.title}</span>
                            <span className="cart-summary-product-qty">Qty {item.quantity}</span>
                        </div>
                        <span className="cart-summary-product-price">
                            ${(item.price * item.quantity).toFixed(2)}
                        </span>
                    </div>
                ))}
            </div>

            {items.length > 0 && <div className="cart-summary-divider" />}

            <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row">
                <span>Shipping</span>
                <span>{subtotal > 0 ? `$${SHIPPING.toFixed(2)}` : "Free"}</span>
            </div>

            <div className="cart-summary-divider" />

            <div className="cart-summary-row cart-summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>

            <Link
                to={count > 0 ? "/checkout" : "#"}
                state={{ subtotal, count, items }}
                className={`cart-summary-checkout ${count === 0 ? "cart-summary-checkout--disabled" : ""}`}
                onClick={(e) => count === 0 && e.preventDefault()}
            >
                Place order →
            </Link>
            <Link to="/products" className="cart-summary-continue">
                ← Back to cart
            </Link>
        </div>
    );
};

export default CartSummary;