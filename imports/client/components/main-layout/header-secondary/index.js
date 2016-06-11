import React from 'react';

import SearchBar from '../search-bar';
import HeaderScene from './header-scene';

const HeaderSecondary = () => (
  <header className="header-secondary container">
    <div className="header-secondary-col col-wide">
      <SearchBar />
      <HeaderScene />
    </div>
  </header>
);

export default HeaderSecondary;
