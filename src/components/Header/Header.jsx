import "./header.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const totalCount = useSelector((state) => state.cart.totalCount);

  const handleBurgerToggle = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  const handleBurgerElClick = (path) => {
    setIsBurgerActive(false);
    navigate(path);
  };

  useEffect(() => {
    if (isBurgerActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isBurgerActive]);

  const navItems = [
    { text: "Каталог", path: "/" },
    { text: "Контакты", path: "/contacts" },
    {
      text: `Корзина ${totalCount > 0 ? `(${totalCount})` : ""}`,
      path: "/cart",
      icon: <ShoppingCart width={18} height={18} />,
    },
  ];

  return (
    <header className="header">
      <h1 className="header__title" onClick={() => handleBurgerElClick("/")}>
        Закуски для бани
      </h1>
      <div className="header__burger-button" onClick={handleBurgerToggle}>
        <span
          className={`header__burger-line header__burger-line_mid ${
            isBurgerActive ? "header__burger-line_mid_active" : ""
          }`}
        ></span>
        <span
          className={`header__burger-line header__burger-line_top ${
            isBurgerActive ? "header__burger-line_top_active" : ""
          }`}
        ></span>
        <span
          className={`header__burger-line header__burger-line_bot ${
            isBurgerActive ? "header__burger-line_bot_active" : ""
          }`}
        ></span>
      </div>
      <ul
        className={`header__burger ${
          isBurgerActive ? "header__burger_active" : ""
        }`}
      >
        {navItems.map((el, index) => (
          <li
            className="header__burger-el"
            onClick={() => handleBurgerElClick(el.path)}
            key={index}
          >
            {el.icon} {el.text}
          </li>
        ))}
      </ul>
      <div
        className={`header__overlay ${
          isBurgerActive ? "header__overlay_active" : ""
        }`}
        onClick={() => setIsBurgerActive(false)}
      ></div>
      <nav className="header__nav">
        {navItems.map((el, index) => (
          <button
            className={`header__nav-el ${
              location.pathname === el.path ? "header__nav-el_active" : ""
            }`}
            key={index}
            onClick={() => navigate(el.path)}
          >
            {el.icon} {el.text}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
