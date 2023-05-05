import React, { useState, useEffect } from "react";

import "./ToTopButton.scss";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top__button ${
        !showButton ? "scroll-to-top__button_hidden" : ""
      }`}
      onClick={handleClick}
    >
      <div className="scroll-to-top__arrow"></div>
    </button>
  );
}

export default ScrollToTopButton;
