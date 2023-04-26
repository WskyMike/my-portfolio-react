import React, { useState, useEffect } from 'react';
import './Header.css';
import skobka from '../../images/skobka.svg';
import { NavLink, Link } from 'react-router-dom';

import resume from '../../images/Sosnin_MI_resume.pdf';

const navTextStyle = { color: '#989898' };

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // Изчезающий хедер

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        const currentScrollPos = window.scrollY;
        setIsHeaderVisible(currentScrollPos === 0);
      }, 200);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { text: 'Главная', path: '/' },
    { text: 'Мои проекты', path: '/projects' },
    { text: 'Поиск картинок', path: '/pictures' },
  ];

  return (
    <header className={`header ${isHeaderVisible ? '' : 'hidden'}`}>
      <Link to="/" className="header__link-skobka">
        <img src={skobka} className="header__logo" alt="logo" />
      </Link>
      <nav className="header__nav">
        <ul>
          <li className="header__nav-item">
            <Link to={'/'} className="header__nav-link">
              <span style={navTextStyle}> 00.</span>Главная
            </Link>
          </li>
          <li className="header__nav-item">
            <NavLink to={'/projects'} className="header__nav-link">
              <span style={navTextStyle}> 01.</span>Мои проекты
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to={'/pictures'} className="header__nav-link">
              <span style={navTextStyle}> 02.</span>Поиск картинок
            </NavLink>
          </li>
          <li className="header__nav-item">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="header__nav-link"
            >
              <span style={navTextStyle}> 03.</span>Резюме
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
