import "./popup-loader.css";
import DefaultLoader from "../DefaultLoader/DefaultLoader";
import { useEffect } from "react";

const PopupLoader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="popup-loader">
      <DefaultLoader />
    </div>
  );
};

export default PopupLoader;
