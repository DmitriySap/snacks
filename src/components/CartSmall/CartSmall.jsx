import "./cart-small.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const CartSmall = () => {
  const navigate = useNavigate();
  const totalCount = useSelector((state) => state.cart.totalCount);

  return (
    <div className="cart-small" onClick={() => navigate("/cart")}>
      <span className="cart-small__count">{totalCount}</span>
      <ShoppingCart className="cart-small__icon" />
    </div>
  );
};

export default CartSmall;
