import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Cart.css";
import { useCart } from "../../../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useCart();
  const count = cart?.count ?? 0;

  return (
    <Link to={"/cart"}>
      <div className="cart">
        <ShoppingCartIcon className="cart__icon" />
        <span>Cart</span>
        {count > 0 && <span className="cart__badge">{count}</span>}
      </div>
    </Link>
  );
};

export default Cart;
