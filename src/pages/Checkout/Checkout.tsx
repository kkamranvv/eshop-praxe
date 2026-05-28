import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import "./Checkout.css"
import CheckIcon from '@mui/icons-material/Check';
import { useLocation } from "react-router-dom";

function getid(){
    const letters = Math.random().toString(36).substring(2, 4).toUpperCase();
    const numbers = Math.floor(Math.random() * 9000 + 1000);
    return `${letters}-${numbers}`;
}

const Checkout = () => {
    const id = getid();
    const { state } = useLocation();
    const subtotal = state?.subtotal ?? 0;
    const count = state?.count ?? 0;
    return(
        <div>
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
                        <dd>{id}</dd>
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
};

export default Checkout;