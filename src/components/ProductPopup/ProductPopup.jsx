import "./product-popup.css";
import { Plus, Minus, Tag } from "lucide-react";
import { useSelector } from "react-redux";

const ProductPopup = ({
  id,
  imageSrc,
  title,
  description,
  price,
  categories,
  onAddItemToCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === id);
  const isInCart = Boolean(cartItem);

  return (
    <div className="product-popup">
      <img
        src={imageSrc}
        alt={title}
        loading="lazy"
        className="product-popup__image"
      />
      <div className="product-popup__right">
        <div className="product-popup__right-top">
          <p className="product-popup__description">{description}</p>
          <ul className="product-popup__categories">
            {categories.map((el, index) => (
              <li className="product-popup__category" key={index}>
                <Tag width={18} height={18} color="var(--text-secondary)" />{" "}
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className="product-popup__footer">
          <span className="product-popup__price">{price} ₽</span>

          {isInCart ? (
            <div className="product-popup__quantity-controls">
              <button
                className="product-popup__quantity-btn product__quantity-btn_minus"
                onClick={onDecreaseQuantity}
              >
                <Minus width={20} height={20} />
              </button>
              <span className="product-popup__quantity">
                {cartItem.quantity}
              </span>
              <button
                className="product-popup__quantity-btn product__quantity-btn_plus"
                onClick={onIncreaseQuantity}
              >
                <Plus width={20} height={20} />
              </button>
            </div>
          ) : (
            <button className="product-popup__button" onClick={onAddItemToCart}>
              <Plus /> Добавить в корзину
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
