import "./app.css";
import { lazy, Suspense } from "react";
import PopupLoader from "../PopupLoader/PopupLoader";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Catalog from "../Catalog/Catalog";

const CartPage = lazy(() => import("../../pages/Cart/Cart"));

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<PopupLoader />}>
              <CartPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
