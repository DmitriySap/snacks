import { X } from "lucide-react";
import { useEffect } from "react";
import "./popup.css";

const PopupWrapper = ({
  content,
  title,
  subtitle,
  isActive,
  setIsActive,
  onClose,
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsActive(false);
      }
    };

    if (isActive) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isActive]);

  return (
    <div
      className={
        isActive ? "popup__overlay popup__overlay_active" : "popup__overlay"
      }
      onClick={onClose}
    >
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <div className="popup__blur"></div>
        <div className="popup__content">
          <div className="popup__header">
            <div className="popup__title-container">
              <p className="popup__title">{title}</p>
              {subtitle && <p className="popup__subtitle">{subtitle}</p>}
            </div>
            <X
              className="popup__close-button"
              width={24}
              height={24}
              onClick={onClose}
            />
          </div>
          {content}
        </div>
      </div>
    </div>
  );
};

export default PopupWrapper;
