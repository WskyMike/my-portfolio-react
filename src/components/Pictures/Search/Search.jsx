import React, { useState } from 'react';

import './Search.css';
import SearchButtonSvg from '../../../images/search.png';
// import { ReactComponent as SearchButtonSvg } from '../../../images/search.svg';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');
  // console.log(query); // query TEST

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  // // Стирание данных после потери фокуса
  // const handleBlur = () => {
  //   setQuery('');
  // };

  return (
    <section className="search">
      <div className="search__container">
        <form
          className="search__form"
          onSubmit={handleSubmit}
          autoComplete="off"
          noValidate
        >
          <div className="search__wrapper-tb">
            <input
              className="search__input"
              type="text"
              autoComplete="off"
              placeholder="Unsplash this . . ."
              value={query}
              onChange={handleInputChange}
              // onBlur={handleBlur}
              required
            ></input>
            <button
              className="search__button"
              type="submit"
              aria-label="search-button"
            >
              <img
                src={SearchButtonSvg}
                alt="search icon"
                className="search__button-img"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Search;
