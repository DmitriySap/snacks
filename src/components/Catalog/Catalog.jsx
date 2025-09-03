import "./catalog.css";
import Product from "../Product/Product";
import { categories, products } from "../../utils/constants";
import { useState } from "react";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все категории");

  const filteredProducts =
    selectedCategory === "Все категории"
      ? products
      : products.filter((product) =>
          product.category.includes(selectedCategory)
        );

  return (
    <section className="catalog">
      <div className="catalog__title-container">
        <h2 className="catalog__title">Наш каталог закусок</h2>
        <h3 className="catalog__subtitle">
          Выберите идеальные закуски для вашего мероприятия. Все блюда готовятся
          из свежих качественных продуктов
        </h3>
      </div>
      <div className="catalog__categories">
        <p className="catalog__categories-title">Категории</p>
        <ul className="catalog__categories-list">
          {categories.map((el, index) => (
            <li
              className={`catalog__category ${
                selectedCategory === el ? "catalog__category_active" : ""
              }`}
              key={index}
              onClick={() => setSelectedCategory(el)}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
      <ul className="catalog__list">
        {filteredProducts.map((el) => {
          return (
            <Product
              imageSrc={el.image}
              categories={el.category}
              title={el.title}
              description={el.description}
              price={el.price}
              key={el.id}
              id={el.id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Catalog;
