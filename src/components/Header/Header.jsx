import "./header.css";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const totalCount = useSelector((state) => state.cart.totalCount);

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
      <h1 className="header__title">Закуски для бани</h1>
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
