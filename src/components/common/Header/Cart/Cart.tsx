import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <ShoppingCartIcon className="cart__icon" />
      <span>Cart</span>
    </div>
  );
};

export default Cart;
