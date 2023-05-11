import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  Toastify,
  renderToastify,
} from "../../../vendor/Toastify/ToastifyConfig";
import "./Search.scss";
import SearchButton from "../../../images/icons8-search-128.png";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  // console.log(query); // query TEST

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      renderToastify("info", "Введите запрос", null, "light");
      return;
    }
    onSearch(query);
  };

  return (
    <section className="search">
      <Toastify />
      <div className="search__container">
        <Form onSubmit={handleSubmit} noValidate>
          <Form.Group className="search__wrapper-tb">
            <Form.Control
              className="search__input"
              type="text"
              placeholder="Unsplash this . . ."
              value={query}
              onChange={handleInputChange}
              required
            />
            <Button
              type="submit"
              aria-label="search-button"
              className="search__button"
            >
              <img
                src={SearchButton}
                alt="search icon"
                className="search__button-img"
              />
            </Button>
          </Form.Group>
        </Form>
      </div>
    </section>
  );
}

export default Search;
