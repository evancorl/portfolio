import React from 'react';

import SearchBar from '../SearchBar';
import HeaderScene from './HeaderScene';

const HeaderSecondary = () => (
  <header className="header-secondary inner-hor">
    <div className="header-secondary-col col-wide">
      <SearchBar />
      <HeaderScene />
    </div>
  </header>
);

export default HeaderSecondary;
