import React from 'react';

import MainMenu from './MainMenu';

const Header = () => {
  const mainMenuLinks = ['About', 'Projects', 'Contact'];

  return (
    <header id="header" className="header inner-hor">
      <div className="col-wide">
        <MainMenu links={mainMenuLinks} />
      </div>
    </header>
  );
};

export default Header;
