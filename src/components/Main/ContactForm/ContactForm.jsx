import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

import {
  PUBLIC_KEY,
  SERVICE_ID,
  TEMPLATE_ID,
  emailRegex,
} from '../../../utils/constants';

function ContactForm() {
  // Поля ввода
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // Валидация
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailRegExpError, setEmailRegExpError] = useState('');
  const [messageError, setMessageError] = useState('');
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
      setNameError('Пожалуйста напишите ваше имя');
      isFormValid = false;
    } else {
      setNameError('');
    }

    // Проверяем, что поле "E-mail" не пустое и соответствует формату email-адреса
    if (!email) {
      setEmailError('Пожалуйста напишите вашу почту');
      isFormValid = false;
    } else {
      setEmailError('');
      // Добавляем проверку соответствия формату email-адреса только в случае, если поле не пустое
      if (!validateEmail(email)) {
        setEmailRegExpError('Некорректный email-адрес');
        setShowEmailError(true);
        isFormValid = false;
        setTimeout(() => {
          setShowEmailError(false);
        }, 3000);
      } else {
        setEmailRegExpError('');
      }
    }

    // Проверяем, что поле "Сообщение" не пустое
    if (!message) {
      setMessageError('Пожалуйста напишите мне что-нибудь');
      isFormValid = false;
    } else {
      setMessageError('');
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
          // console.log('SUCCESS!', response.status, response.text);
          res.status === 200 && setName('');
          setEmail('');
          setMessage('');
          setIsSubmitted(false);
        })
        .catch((error) => {
          console.log('FAILED...', error);
        });
    }
  };

  return (
    <form
      id="contactForm"
      onSubmit={handleSubmit}
      className="contact-form"
      noValidate
    >
      <h2 className="form-title">Пригласить на собес:</h2>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Имя:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          required
          placeholder={nameError}
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          E-mail:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          required
          placeholder={emailError}
        />
        {showEmailError && (
          <div className="error-message">{emailRegExpError}</div>
        )}{' '}
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Сообщение:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-input"
          required
          placeholder={messageError}
        ></textarea>
      </div>
      {isSubmitted ? (
        <button
          type="submit"
          className="form-submit-btn"
          disabled
          style={{ backgroundColor: '#98CE00', color: '#000' }}
        >
          Спасибо! 🖤
        </button>
      ) : (
        <button type="submit" className="form-submit-btn">
          Отправить 👌
        </button>
      )}
    </form>
  );
}

export default ContactForm;
