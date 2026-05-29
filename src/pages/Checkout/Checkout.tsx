import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import Button from "../../components/common/Button/Button";
import OrderSummary from "../../components/common/OrderSummary/OrderSummary";
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
        if (name === "card") {
            const digits = value.replace(/\D/g, "").slice(0, 16);
            const formatted = digits.replace(/(.{4})/g, "$1 ").trim();
            setForm(prev => ({ ...prev, card: formatted }));
        } else {
            setForm(prev => ({ ...prev, [name]: value }));
        }
        setErrors(prev => ({ ...prev, [name]: false }));
    };

    const handlePlace = () => {
        const newErrors = {
            name: form.name.trim() === "",
            email: !form.email.includes("@"),
            address: form.address.trim() === "",
            card: form.card.replace(/\s/g, "").length !== 16,
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
            <PageHeader
                tag="CHECKOUT"
                title="Almost there."
                description="A few details and you're done. Nothing is actually charged — this is a demo."
            />
            <div className="checkout-body">
                <div className="checkout-left">
                    <div className="checkout-form">
                        <div className="checkout-field">
                            <label className="checkout-label">Full name</label>
                            <input
                                className={`checkout-input ${errors.name ? "checkout-input--error" : ""}`}
                                name="name"
                                placeholder="John Doe"
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
                                placeholder="john@example.com"
                                value={form.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="checkout-error">Please enter a valid email</span>}
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
                            {errors.card && <span className="checkout-error">Card must be 16 digits</span>}
                        </div>
                    </div>
                </div>

                <div className="checkout-right">
                    <OrderSummary items={items} subtotal={subtotal}>
                        <Button text="Place order →" onClick={handlePlace} />
                        <button type="button" className="checkout-back" onClick={() => navigate("/cart")}>
                            ← Back to cart
                        </button>
                    </OrderSummary>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;