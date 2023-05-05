import React, { useState } from 'react';

import Search from './Search/Search';
import Gallery from './Gallery/Gallery';
import './Pictures.scss';

function Pictures() {
  const [query, setQuery] = useState('');

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };
  return (
    <section className="pictures">
      <Search onSearch={handleSearch} />
      <Gallery query={query} />
    </section>
  );
}

export default Pictures;
