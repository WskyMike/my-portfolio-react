import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.scss";

import {
  PUBLIC_KEY,
  SERVICE_ID,
  TEMPLATE_ID,
  emailRegex,
} from "../../../utils/constants";

function ContactForm() {
  // Поля ввода
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Валидация
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailRegExpError, setEmailRegExpError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  // Состояние кнопки submit
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Функция для проверки валидности email-адреса
  const validateEmail = (email) => {
    return emailRegex.test(email.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let isFormValid = true;

    // Проверяем, что поле "Имя" не пустое
    if (!name) {
      setNameError("Пожалуйста напишите ваше имя");
      isFormValid = false;
    } else {
      setNameError("");
    }

    // Проверяем, что поле "E-mail" не пустое и соответствует формату email-адреса
    if (!email) {
      setEmailError("Пожалуйста напишите вашу почту");
      isFormValid = false;
    } else {
      setEmailError("");
      // Добавляем проверку соответствия формату email-адреса только в случае, если поле не пустое
      if (!validateEmail(email)) {
        setEmailRegExpError("Некорректный email-адрес");
        setShowEmailError(true);
        isFormValid = false;
        setTimeout(() => {
          setShowEmailError(false);
        }, 3000);
      } else {
        setEmailRegExpError("");
      }
    }

    // Проверяем, что поле "Сообщение" не пустое
    if (!message) {
      setMessageError("Пожалуйста напишите мне что-нибудь");
      isFormValid = false;
    } else {
      setMessageError("");
    }

    if (isFormValid) {
      setIsSubmitted(true);

      const contactNumber = (Math.random() * 100000) | 0;

      const templateParams = {
        name,
        email,
        message,
        contact_number: contactNumber,
      };

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then((res) => {
          res.status === 200 && setName("");
          setEmail("");
          setMessage("");
          setIsSubmitted(false);
        })
        .catch((error) => {
          console.log("FAILED...", error);
        });
    }
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="contact-form"
      noValidate
    >
      <h3 className="contact-form__title">
        function{" "}
        <span className="highlighted-text-shadow">inviteAnInterview</span>() =
      </h3>
      <div className="contact-form__group-wrapper">
        <div className="contact-form__group mb-4">
          <label htmlFor="name" className="contact-form__label">
            Имя:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="contact-form__input form-control"
            required
            placeholder={nameError}
            autoComplete="off"
          />
        </div>
        <div className="contact-form__group mb-4">
          <label htmlFor="email" className="contact-form__label">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="contact-form__input form-control"
            required
            placeholder={emailError}
          />
          {showEmailError && (
            <div className="contact-form__error-message">
              {emailRegExpError}
            </div>
          )}{" "}
        </div>
        <div className="contact-form__group mb-4">
          <label htmlFor="message" className="contact-form__label">
            Сообщение:
          </label>
          <textarea
            id="message-area"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="contact-form__input form-control"
            required
            placeholder={messageError}
            rows="3"
          ></textarea>
        </div>
        {isSubmitted ? (
          <button
            type="submit"
            className="contact-form__submit-btn btn btn-primary"
            disabled
            style={{ backgroundColor: "#98CE00", color: "#000", opacity: "1" }}
          >
            Спасибо! 🖤
          </button>
        ) : (
          <button
            type="submit"
            className="contact-form__submit-btn btn btn-primary"
          >
            Отправить
          </button>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
