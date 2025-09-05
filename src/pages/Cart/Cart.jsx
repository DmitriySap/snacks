import "./cart.css";
import { Minus, Plus, Trash2, Phone, Send } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  removeItemCompletely,
  emptyCart,
} from "../../store/cartSlice";

const Cart = ({}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleIncreaseQuantity = (
    id,
    imageSrc,
    categories,
    title,
    description,
    price
  ) => {
    dispatch(addItem({ id, imageSrc, categories, title, description, price }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(removeItem(id));
  };

  const handleRemoveItemCompletely = (id) => {
    dispatch(removeItemCompletely(id));
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  const orderItems = [
    {
      icon: <Phone width={20} height={20} color="var(--text-color)" />,
      text: "Позвонить",
      info: "+7 (963) 114-40-73",
      href: "tel:+796311144073",
    },
    {
      icon: <Send width={20} height={20} color="var(--text-color)" />,
      text: "Telegram",
      info: "@Olgabanya14",
      href: "https://t.me/Olgabanya14",
    },
  ];

  return (
    <section className="cart">
      <div className="cart__title-container">
        <h2 className="cart__title">
          {cart.items.length > 0 ? "Ваш заказ" : "Ваша корзина пуста"}
        </h2>
        <p className="cart__subtitle">
          {cart.items.length > 0
            ? "Проверьте выбранные товары и оформите заказ"
            : "Добавьте вкусные закуски из нашего каталога!"}
        </p>
      </div>
      {cart.items.length > 0 && (
        <div className="cart__container">
          <ul className="cart__items">
            {cart.items.map((el) => (
              <li className="cart__item" key={el.id}>
                <div className="cart__item-left">
                  <img
                    src={el.imageSrc}
                    alt={el.title}
                    className="cart__item-img"
                  />
                  <div className="cart__item-text-container">
                    <div className="cart__item-title-container">
                      <p className="cart__item-title">{el.title}</p>
                      {el.quantity > 1 && (
                        <span className="cart__item-count">
                          {el.price} ₽/шт
                        </span>
                      )}
                    </div>
                    <span className="cart__item-quantity">
                      <Minus
                        className="cart__item-button cart__item-button_minus"
                        onClick={() => handleDecreaseQuantity(el.id)}
                      />
                      {el.quantity}
                      <Plus
                        className="cart__item-button cart__item-button_plus"
                        onClick={() =>
                          handleIncreaseQuantity(
                            el.id,
                            el.imageSrc,
                            el.categories,
                            el.title,
                            el.description,
                            el.price
                          )
                        }
                      />
                    </span>
                  </div>
                </div>
                <div className="cart__item-right">
                  <span className="cart__item-price">
                    {Number(el.price) * el.quantity} ₽
                  </span>
                  <Trash2
                    className="cart__item-trash"
                    onClick={() => handleRemoveItemCompletely(el.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="cart__info">
            <p className="cart__info-title">Оформление заказа</p>
            <span className="cart__total">
              Итого:{" "}
              <span className="cart__total-price">{cart.totalPrice} ₽</span>
            </span>
            <p className="cart__info-order-text">Для оформления заказа:</p>
            <div className="cart__order-items">
              {orderItems.map((el, index) => (
                <a
                  href={el.href}
                  target="_blank"
                  className="cart__order-item"
                  key={index}
                >
                  {el.icon}
                  <div className="cart__order-item-text">
                    <p className="cart__order-item-title">{el.text}</p>
                    <span className="cart__order-item-info">{el.info}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
