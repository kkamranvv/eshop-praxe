import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import PageHeader from "../components/common/PageHeader/PageHeader";
import CartItem from "../components/features/CartPage/CartItem";
import CartSummary from "../components/features/CartPage/CartSummary";
import { useCart } from "../context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { items, count, removeItem, updateQuantity, clearCart } = useCart()!;
  const subtotal = items.reduce((sum: number, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="cart-page-wrapper">
      <Header />
      <div className="cart-page-content">
        <div className="cart-page">
          <div className="cart-page-top">
            <PageHeader
              tag="CART"
              title="Your basket."
              description={`${count} item${count !== 1 ? "s" : ""} · review and adjust before checkout`}
            />
            {items.length > 0 && (
              <button type="button" className="cart-page-empty" onClick={clearCart}>
                Empty cart
              </button>
            )}
          </div>
          <div className="cart-page-body">
            <div className="cart-page-items">
              {items.length === 0 ? (
                <p className="cart-page-empty-msg">Your cart is empty.</p>
              ) : (
                items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={removeItem}
                    onQuantityChange={updateQuantity}
                  />
                ))
              )}
            </div>
            <CartSummary subtotal={subtotal} count={count} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
