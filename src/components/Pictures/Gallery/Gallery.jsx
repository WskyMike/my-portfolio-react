/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from "react";
import AppContexts from "../../../Сontexts/AppContexts";

import "./Gallery.scss";
import UnsplashApi from "../../../utils/UnsplashApi";
import Loader from "../../Loader/Loader";
import ScrollToTopButton from "../ScrollToTopButton/ToTopButton";
import ImagePopup from "../ImagePopup/ImagePopup";

function Gallery({ query }) {
  // Состояние для хранения загруженных фотографий
  const [photos, setPhotos] = useState([]);
  // Состояние для указания состояния загрузки
  const [loading, setLoading] = useState(false);
  // Состояние текущей страницы
  const [currentPage, setCurrentPage] = useState(1);
  // Состояние общего количества страниц
  const [totalPages, setTotalPages] = useState(1);
  // Состояние кликнутое фото
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Клик на попап
  function handlePhotoClick(photo) {
    setSelectedPhoto(photo);
  }
  // Закрыть fullscreen popup
  function closeAllPopups() {
    setSelectedPhoto(null);
  }

  // Функция для загрузки фотографий с Unsplash
  const fetchPhotos = async (query, page) => {
    try {
      setLoading(true); // Устанавливаем состояние загрузки
      const data = await UnsplashApi(query, page); // Получаем данные с API
      // Обновляем состояние фотографий
      setPhotos((prevPhotos) => {
        const newPhotos = data.results.filter(
          (photo) => !prevPhotos.some((prevPhoto) => prevPhoto.id === photo.id)
        ); // Проверка на уникальность photo.id каждой новой фотографии
        return prevPhotos.concat(newPhotos); // Объеденяем массивы старых и новых фото
      });
      setTotalPages(data.total_pages); // Обновляем общее количество страниц
      setCurrentPage(page); // Обновляем текущую страницу
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Снимаем состояние загрузки
    }
  };

  // Загрузка первой страницы при монтировании компонента
  useEffect(() => {
    setPhotos([]); // Очищаем массив фотографий
    fetchPhotos(query, 1); // Загружаем первую страницу
  }, [query]);

  // Функция для загрузки следующей страницы
  const loadMorePhotos = () => {
    const nextPage = currentPage + 1; // Вычисляем номер следующей страницы
    fetchPhotos(query, nextPage); // Загружаем следующую страницу
  };

  // Обработчик скролла страницы ("бесконечная" прокрутка)
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (
      scrollTop + clientHeight >= scrollHeight - 1 &&
      !loading &&
      currentPage < totalPages // Проверим, есть ли незагруженные фото
    ) {
      loadMorePhotos();
    }
  };

  // Добавляем обработчик скролла при монтировании компонента
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage, loading, query, totalPages]);

  return (
    <AppContexts.Provider value={loading}>
      <ScrollToTopButton />
      <ImagePopup photo={selectedPhoto} onClose={closeAllPopups} />
      <section className="gallery">
        {photos.map((photo, index) => (
          <figure
            key={photo.id}
            onClick={() => handlePhotoClick(photo)}
            className="gallery__card"
          >
            <img
              className="gallery__img"
              src={photo.urls.raw + "&w=800"}
              alt={photo.alt_description}
            />
            {/* <div className="gallery__number">{index + 1}</div> */}
          </figure>
        ))}
        {loading && <Loader />}
      </section>
    </AppContexts.Provider>
  );
}

export default Gallery;
