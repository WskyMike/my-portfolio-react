import { React, useState } from "react";
import "./weather.scss";
import { getWeather } from "../../utils/AsyncWeatherApi_AccuWeather";

import humidityImg from "../../images/weather_icons/hygrometer.svg";
import windImg from "../../images/weather_icons/wind.svg";
import Loader from "../Loader/Loader";
import NotFoundImg from "../../images/not-found-angry-face.svg";
import { Toastify, renderToastify } from "../../vendor/Toastify/ToastifyConfig";

const Weather = () => {
  // Стейт для хранения названия города
  const [city, setCity] = useState("");
  // Стейт для хранения текущей погоды в указанном городе
  const [weather, setWeather] = useState(null);
  // Стейт загрузки
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  // Функция для получения данных о погоде и обновления стейта weather
  const handleSearch = async (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      renderToastify(
        "info",
        "Введите название города",
        "bottom-right",
        "light"
      );
      return;
    }
    setLoading(true);

    setTimeout(async () => {
      try {
        // Запрос на получение текущей погоды для указанного местоположения
        const data = await getWeather(city);
        // Ловим ошибку в API запросе
        if (data.error) {
          throw new Error(data.error);
        }
        // Обновляем стейт с полученной погодой
        setError(false); // Если была до этого ошибка - убираем
        setWeather(data);
      } catch (error) {
        renderToastify(
          "error",
          `Местоположение не найдено. Попробуйте поменять язык ввода или добавить страну.`,
          "bottom-right",
          "colored",
          5000
        );
        setError(true); // Выводим not found
        setWeather(null);
      }
      setLoading(false);
      setCity("");
    }, 1500);
  };

  // Отслеживаем ввод в строке поиска
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <section className="weather">
      <Toastify />
      <h3 className="weather__header">
        function{" "}
        <span className="highlighted-text-shadow">weatherForecast</span>() =
      </h3>
      <div className="weather__container">
        <form
          className="weather__search-box mb-3"
          onSubmit={handleSearch}
          noValidate
        >
          <input
            className="weather__search-input form-control"
            type="text"
            autoComplete="off"
            placeholder="Введите город"
            value={city}
            onChange={handleInputChange}
            required
            disabled={!!loading}
          ></input>
          <button
            type="submit"
            aria-label="search-weather"
            className="weather__search-button btn btn-primary"
          >
            {!loading ? (
              "Поиск"
            ) : (
              <div className="weather__loader">
                <Loader className="hidden" />
              </div>
            )}
          </button>
        </form>
        {weather && (
          <div
            className={`container weather__result-box ${
              loading ? "fade-out" : "fade-in"
            }`}
          >
            <div className="row weather__result-location text-center">
              <h2 className="weather__result-location-city text-break fs-4">
                {`${weather.city}, ${weather.country}`}
              </h2>
              <h3 className="weather__result-location-area fs-6 fw-lighter">
                {`${weather.administrativeArea}`}
              </h3>
            </div>
            <div className="weather__result-primary">
              <div className="weather__result-primary-icon">
                <img
                  src={weather.icon}
                  className="weather__result-primary-icon"
                  alt="weather icon"
                />
              </div>
              <div className="weather__result-primary-right">
                <p className="weather__result-primary-temp">
                  {`${Math.floor(weather.temperature)}`}&deg;C
                </p>
                <div className="weather__result-secondary">
                  <div className="weather__result-secondary-container">
                    {" "}
                    <img
                      src={humidityImg}
                      alt="humidity img"
                      className="weather__result-secondary-humiwind-icon"
                    />
                    <p className="weather__result-secondary-humiwind-text">
                      {`${weather.humidity}`} %
                    </p>
                  </div>
                  <div className="weather__result-secondary-container">
                    {" "}
                    <img
                      src={windImg}
                      alt="winddddd img"
                      className="weather__result-secondary-humiwind-icon"
                    />
                    <p className="weather__result-secondary-humiwind-text">
                      {`${Math.round(weather.wind / 3.6)}`} м/c
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row weather__result-text text-center">
              <p className="weather__result-text-descr fs-5">
                {weather.description}
              </p>
              <p className="weather__result-text-realfeel fs-6 fw-lighter">{`На улице ${weather.realfeel.toLowerCase()}`}</p>
            </div>
          </div>
        )}
        {error && (
          <div
            className={`weather__not-found ${loading ? "fade-out" : "fade-in"}`}
          >
            {/* <p className="weather__not-found-text-top">
              Местоположение не найдено.
            </p>
            <p className="weather__not-found-text-bottom">
              Попробуйте поменять язык ввода и\или добавить страну.
            </p> */}
            <img
              src={NotFoundImg}
              alt="not found img"
              className="weather__not-found-img"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Weather;
