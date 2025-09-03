import { useState, lazy, Suspense } from "react";
import ProductPopup from "../ProductPopup/ProductPopup";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/cartSlice";
import PopupLoader from "../PopupLoader/PopupLoader";
import "./product.css";
import { Plus, Minus } from "lucide-react";

const PopupWrapper = lazy(() => import("../PopupWrapper/PopupWrapper"));

const Product = ({ id, imageSrc, categories, title, description, price }) => {
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);

  const cartItem = cartItems.find((item) => item.id === id);
  const isInCart = Boolean(cartItem);

  const handleAddItemToCart = (e) => {
    e.stopPropagation();
    dispatch(addItem({ id, imageSrc, categories, title, description, price }));
  };

  const handleIncreaseQuantity = (e) => {
    e.stopPropagation();
    dispatch(addItem({ id, imageSrc, categories, title, description, price }));
  };

  const handleDecreaseQuantity = (e) => {
    e.stopPropagation();
    dispatch(removeItem(id));
  };

  return (
    <>
      <li className="product" onClick={() => setIsPopupOpen(true)}>
        <img
          src={imageSrc}
          alt={title}
          className="product__img"
          loading="lazy"
        />
        <div className="product__bottom">
          <div className="product__text-container">
            <p className="product__name">{title}</p>
            <p className="product__description" title={description}>
              {description}
            </p>
          </div>
          <div className="product__footer">
            <span className="product__price">{price} ₽</span>

            {isInCart ? (
              <div
                className="product__quantity-controls"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="product__quantity-btn product__quantity-btn_minus"
                  onClick={handleDecreaseQuantity}
                >
                  <Minus width={20} height={20} />
                </button>
                <span className="product__quantity">{cartItem.quantity}</span>
                <button
                  className="product__quantity-btn product__quantity-btn_plus"
                  onClick={handleIncreaseQuantity}
                >
                  <Plus width={20} height={20} />
                </button>
              </div>
            ) : (
              <button
                className="product__cart-button"
                onClick={handleAddItemToCart}
              >
                <Plus width={16} height={16} color="var(--text-secondary)" /> В
                корзину
              </button>
            )}
          </div>
        </div>
      </li>{" "}
      {isPopupOpen && (
        <Suspense fallback={<PopupLoader />}>
          <PopupWrapper
            title={title}
            isActive={isPopupOpen}
            setIsActive={setIsPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            content={
              <ProductPopup
                imageSrc={imageSrc}
                title={title}
                description={description}
                price={price}
                categories={categories}
                onAddItemToCart={handleAddItemToCart}
                onIncreaseQuantity={handleIncreaseQuantity}
                onDecreaseQuantity={handleDecreaseQuantity}
                id={id}
              />
            }
          />
        </Suspense>
      )}
    </>
  );
};

export default Product;
