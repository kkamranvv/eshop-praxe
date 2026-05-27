import "./Checkout.css"
import CheckIcon from '@mui/icons-material/Check';

const Checkout = () => {
    return(
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
                    <dd>PX-4915</dd>
                </div>
                <div>
                    <dt>Items</dt>
                    <dd>1</dd>
                </div>
                <div>
                    <dt>Total</dt>
                    <dd>$695.00</dd>
                </div>
            </dl>
        </div>

    );
};

export default Checkout;