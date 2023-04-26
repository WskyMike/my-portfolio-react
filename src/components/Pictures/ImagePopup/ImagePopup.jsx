/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';

import './ImagePopup.css';

function ImagePopup({ photo, onClose }) {
  // Отключаем скролл при открытии
  useEffect(() => {
    if (photo) {
      document.body.style.overflow = 'hidden'; // отключаем прокрутку
    } else {
      document.body.style.overflow = 'auto'; // включаем прокрутку
    }
  }, [photo]);

  // Закрытие по клику на оверлей
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('popup')) {
      onClose();
    }
  };

  // Закрытие по ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className={`popup popup_style_fullscreen-img ${photo && 'popup_opened'}`}
      onClick={handleOverlayClick}
    >
      <div
        className="popup__fullscreen-container"
        onClick={() => window.open(photo?.urls?.full)}
      >
        <img
          className="popup__fullscreen-img"
          src={photo?.urls?.regular}
          alt={photo?.alt_description}
        />
        <h2 className="popup__fullscreen-title">{photo?.description}</h2>
        <h3 className="popup__fullscreen-author">
          <button
            className="popup__fullscreen-author-link"
            onClick={() => window.open(photo?.user?.links?.html)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {photo?.user?.name}
          </button>
        </h3>{' '}
      </div>
    </div>
  );
}

export default ImagePopup;
