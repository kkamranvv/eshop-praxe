import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import "./Checkout.css";
import CheckIcon from '@mui/icons-material/Check';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

function getid() {
    const letters = Math.random().toString(36).substring(2, 4).toUpperCase();
    const numbers = Math.floor(Math.random() * 9000 + 1000);
    return `${letters}-${numbers}`;
}

const Checkout = () => {
    const { state } = useLocation();
    const subtotal = state?.subtotal ?? 0;
    const count = state?.count ?? 0;
    const items = state?.items ?? [];
    const cart = useCart();
    const navigate = useNavigate();

    const [placed, setPlaced] = useState(false);
    const [orderId] = useState(getid());

    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        card: "",
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        address: false,
        card: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: false }));
    };

    const handlePlace = () => {
        const newErrors = {
            name: form.name.trim() === "",
            email: form.email.trim() === "",
            address: form.address.trim() === "",
            card: form.card.trim() === "",
        };
        setErrors(newErrors);
        if (Object.values(newErrors).some(Boolean)) return;
        cart?.clearCart();
        setPlaced(true);
    };

    if (placed) {
        return (
            <div className="checkout-page-wrapper">
                <Header />
                <div className="success-wrapper">
                    <div className="success-circle">
                        <CheckIcon className="success-icon" />
                    </div>
                    <div className="order">
                        <h3>ORDER PLACED</h3>
                    </div>
                    <div className="page-title">
                        <h2>Thanks — we've got your order.</h2>
                    </div>
                    <div className="page-lead">
                        <p>A confirmation would normally land in your inbox. For now, the receipt lives right here.</p>
                    </div>
                    <dl className="order-meta">
                        <div>
                            <dt>Order no.</dt>
                            <dd>{orderId}</dd>
                        </div>
                        <div>
                            <dt>Items</dt>
                            <dd>{count}</dd>
                        </div>
                        <div>
                            <dt>Total</dt>
                            <dd>${subtotal.toFixed(2)}</dd>
                        </div>
                    </dl>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="checkout-page-wrapper">
            <Header />
            <div className="checkout-body">
                <div className="checkout-left">
                    <span className="checkout-tag">CHECKOUT</span>
                    <h1 className="checkout-title">Almost there.</h1>
                    <p className="checkout-lead">A few details and you're done. Nothing is actually charged — this is a demo.</p>

                    <div className="checkout-form">
                        <div className="checkout-field">
                            <label className="checkout-label">Full name</label>
                            <input
                                className={`checkout-input ${errors.name ? "checkout-input--error" : ""}`}
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="checkout-error">Please enter your name</span>}
                        </div>

                        <div className="checkout-field">
                            <label className="checkout-label">Email</label>
                            <input
                                className={`checkout-input ${errors.email ? "checkout-input--error" : ""}`}
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="checkout-error">Please enter your email</span>}
                        </div>

                        <div className="checkout-field">
                            <label className="checkout-label">Shipping address</label>
                            <input
                                className={`checkout-input ${errors.address ? "checkout-input--error" : ""}`}
                                name="address"
                                placeholder="Národní 16, 110 00 Praha"
                                value={form.address}
                                onChange={handleChange}
                            />
                            {errors.address && <span className="checkout-error">Please enter your address</span>}
                        </div>

                        <div className="checkout-field">
                            <label className="checkout-label">Card number</label>
                            <input
                                className={`checkout-input ${errors.card ? "checkout-input--error" : ""}`}
                                name="card"
                                placeholder="4242 4242 4242 4242"
                                value={form.card}
                                onChange={handleChange}
                            />
                            {errors.card && <span className="checkout-error">Please enter your card number</span>}
                            <span className="checkout-test-note">Test only — no real charge.</span>
                        </div>
                    </div>
                </div>

                <div className="checkout-right">
                    <div className="cart-summary">
                        <p className="cart-summary-heading">ORDER SUMMARY</p>
                        <div className="cart-summary-items">
                            {items.map((item: any) => (
                                <div key={item.id} className="cart-summary-product">
                                    <img src={item.image} alt={item.title} className="cart-summary-product-img" />
                                    <div className="cart-summary-product-info">
                                        <span className="cart-summary-product-title">{item.title}</span>
                                        <span className="cart-summary-product-qty">Qty {item.quantity}</span>
                                    </div>
                                    <span className="cart-summary-product-price">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary-divider" />
                        <div className="cart-summary-row">
                            <span>Subtotal</span>
                            <span>${(subtotal - 6.50).toFixed(2)}</span>
                        </div>
                        <div className="cart-summary-row">
                            <span>Shipping</span>
                            <span>$6.50</span>
                        </div>
                        <div className="cart-summary-divider" />
                        <div className="cart-summary-row cart-summary-total">
                            <span>Total</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <button className="cart-summary-checkout" onClick={handlePlace}>
                            Place order →
                        </button>
                        <button className="cart-summary-continue" onClick={() => navigate("/cart")}>
                            ← Back to cart
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;