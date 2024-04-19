import React from "react";
import "./aboutPage.css";
import "../../scss/bootstrap_mash.scss";

function AboutPage() {
  return (
    <section className="skills">
      <h3 className="skills__title">
        const <span className="highlighted-text-shadow">aboutPageText</span> =
      </h3>
      <div className="skills__wrapper container">
        Это одностраничное React-приложение (v.18), создано с помощью Create
        React App. Роутинг на React Router DOM (v.6). Сборка – Webpack. Вёрстка
        респонсивная (Bootstrap + Scss). Файловая структура и CSS по БЭМ.
        Код-стайл – ESLint (Airbnb). На страничке реализовано использование
        AccuWeather API для запроса фактической погоды в любом городе мира и
        Unsplash API для поиска картинок. Для отправки сообщения через
        электронную почту – EmailJS. Так же есть toastify-уведомления для
        пользователей. Все формы валидируются.
      </div>
    </section>
  );
}

export default AboutPage;
