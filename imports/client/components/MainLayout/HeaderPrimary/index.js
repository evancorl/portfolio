import React from 'react';

import MainMenu from './MainMenu';
import UserNavigation from '../UserNavigation';

const HeaderPrimary = () => {
  const mainMenuLinks = ['About', 'Projects', 'Demo', 'Resume'];

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
