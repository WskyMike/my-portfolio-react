/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from "react";

import "./AboutPagePopup.scss";
import { aboutPageText } from "../../../utils/aboutme";

function AboutPagePopup({ isOpen, onClose }) {
  // Отключаем скролл при открытии
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // отключаем прокрутку
    } else {
      document.body.style.overflow = "auto"; // включаем прокрутку
    }
  }, [isOpen]);

  // Закрытие по клику на оверлей
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup")) {
      onClose();
    }
  };

  // Закрытие по ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className={`popup popup_style_aboutpage ${isOpen && "popup_opened"}`}
      onClick={handleOverlayClick}
    >
      <div className="popup__aboutpage-container">
        {aboutPageText.split("\n").map((paragraph, index) => (
          <p key={index} className="popup__aboutpage-text">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AboutPagePopup;
