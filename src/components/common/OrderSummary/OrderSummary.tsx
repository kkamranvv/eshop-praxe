import "./OrderSummary.css";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface OrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  children: React.ReactNode;
}

const SHIPPING = 6.5;

const OrderSummary = ({ items, subtotal, children }: OrderSummaryProps) => {
  const total = subtotal + (subtotal > 0 ? SHIPPING : 0);

  return (
    <div className="order-summary">
      <p className="order-summary-heading">ORDER SUMMARY</p>

      <div className="order-summary-items">
        {items.map((item) => (
          <div key={item.id} className="order-summary-product">
            <img src={item.image} alt={item.title} className="order-summary-product-img" />
            <div className="order-summary-product-info">
              <span className="order-summary-product-title">{item.title}</span>
              <span className="order-summary-product-qty">Qty {item.quantity}</span>
            </div>
            <span className="order-summary-product-price">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {items.length > 0 && <div className="order-summary-divider" />}

      <div className="order-summary-row">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="order-summary-row">
        <span>Shipping</span>
        <span>{subtotal > 0 ? `$${SHIPPING.toFixed(2)}` : "Free"}</span>
      </div>

      <div className="order-summary-divider" />

      <div className="order-summary-row order-summary-total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      {children}
    </div>
  );
};

export default OrderSummary;
