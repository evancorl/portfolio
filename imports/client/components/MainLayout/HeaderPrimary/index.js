import React from 'react';

import MainMenu from './MainMenu';
import UserNavigation from '../UserNavigation';

const HeaderPrimary = () => {
  const mainMenuLinks = ['About', 'Projects', 'Contact'];

  return (
    <header id="header-primary" className="header-primary inner-hor">
      <div className="col-wide">
        <MainMenu links={mainMenuLinks} />
        <UserNavigation />
      </div>
    </header>
  );
};

export default HeaderPrimary;
