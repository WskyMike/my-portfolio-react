import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Header.scss";
import skobka from "../../images/skobka.svg";
import resume from "../../images/Sosnin_MI_resume.pdf";

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // Изчезающий хедер
  const [isNavExpanded, setIsNavExpanded] = useState(false); // Сворачиваемый хедер

  const handleNavToggle = () => setIsNavExpanded(!isNavExpanded);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsHeaderVisible(currentScrollPos < 70);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Клик по любому item закрывает меню
  const handleavClick = () => {
    setIsNavExpanded(false);
  };

  return (
    <header className={`header ${isHeaderVisible ? "" : "hidden"}`}>
      <Navbar
        expand="lg"
        bg="transparent"
        variant="light"
        expanded={isNavExpanded}
        onToggle={handleNavToggle}
      >
        <Container>
          <Navbar.Brand>
            <img
              src={skobka}
              className="d-inline-block align-top"
              alt="logo"
              height="40vmin"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="me-5 justify-content-end"
          >
            <Nav className="ml-auto gap-4">
              <Nav.Link
                as={NavLink}
                to="/"
                className="header__nav-item"
                onClick={handleavClick}
              >
                <span className="highlighted-text-nav"> 00.</span>Главная
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/projects"
                className="header__nav-item"
                onClick={handleavClick}
              >
                <span className="highlighted-text-nav"> 01.</span>Мои проекты
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/pictures"
                className="header__nav-item"
                onClick={handleavClick}
              >
                <span className="highlighted-text-nav"> 02.</span>Поиск картинок
              </Nav.Link>
              <a
                className="header__nav-item nav-link"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="highlighted-text-nav"> 03.</span>Резюме
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
