import React from 'react';

import MainMenu from './MainMenu';

const HeaderPrimary = () => {
  const mainMenuLinks = ['About', 'Projects', 'Contact'];

  return (
    <header id="header-primary" className="header-primary inner-hor">
      <div className="col-wide">
        <MainMenu links={mainMenuLinks} />
      </div>
    </header>
  );
};

export default HeaderPrimary;
