import React, { useState } from 'react';
import './weather.css';
import { getWeather } from '../../utils/AsyncWeatherApi_AccuWeather';

import locationIcon from '../../images/icons8-location-64.png';
import humidityImg from '../../images/weather_icons/hygrometer.svg';
import windImg from '../../images/weather_icons/wind.svg';
import Loader from '../Loader/Loader';
import NotFoundImg from '../../images/page-not-found-5.png';

const Weather = () => {
  // Стейт для хранения названия города
  const [city, setCity] = useState('');
  // Стейт для хранения текущей погоды в указанном городе
  const [weather, setWeather] = useState(null);
  // Стейт загрузки
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  // Функция для получения данных о погоде и обновления стейта weather
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      console.error('Ошибка в получении данных в компоненте Weather', error);
      setError(true); // Выводим not found
      setWeather(null);
    }
    setLoading(false);
  };

  // Отслеживаем ввод в строке поиска
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <section className="weather">
      <h1 className="weather__header">Погодка</h1>
      <div className="weather__container">
        <form className="weather__search-box" onSubmit={handleSearch}>
          <img
            src={locationIcon}
            alt="location icon"
            className="weather__search-location-icon"
          />
          <input
            className="weather__search-input"
            type="text"
            autoComplete="off"
            placeholder="Введите город"
            value={city}
            onChange={handleInputChange}
            required
          ></input>
          {loading ? (
            <div className="weather__loader">
              <Loader className="hidden" />
            </div>
          ) : (
            <button
              className="weather__search-button"
              type="submit"
              aria-label="search-button"
            />
          )}
        </form>
        {weather && (
          <div className="weather__result-box">
            <h2 className="weather__result-location">
              {`${weather.city}, ${weather.country}`}
            </h2>
            <h3 className="weather__result-location-area">
              {`${weather.administrativeArea}`}
            </h3>
            <div className="weather-container">
              <img
                className="weather__result-icon"
                src={weather.icon}
                alt="weather icon"
              />
              <p className="weather__result-temp">
                {`${Math.floor(weather.temperature)}`}&deg;C
              </p>
            </div>
            <p className="weather__result-descr">{weather.description}</p>
            <p className="weather__result-realfeel">{`По ощущениям на улице ${weather.realfeel.toLowerCase()}`}</p>
            <div className="weather-container">
              <div className="weather-container">
                <img
                  src={humidityImg}
                  alt="humidity img"
                  className="humiwind-img"
                />
                <p className="weather__result-humiwind">
                  {`${weather.humidity}`} %
                </p>
              </div>
              <div className="weather-container">
                <img
                  src={windImg}
                  alt="humidity img"
                  className="humiwind-img"
                />
                <p className="weather__result-humiwind">
                  {`${Math.round(weather.wind / 3.6)}`} м/с
                </p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="weather__not-found">
            <p className="weather__not-found-text found-text-top">
              Местоположение не найдено.
            </p>
            <p className="weather__not-found-text found-text-bottom">
              Попробуйте поменять язык ввода и\или добавить страну.
            </p>
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
