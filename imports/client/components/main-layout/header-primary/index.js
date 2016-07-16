import React from 'react';

import MainMenu from './main-menu';
import UserNavigation from '../user-navigation';

const HeaderPrimary = () => {
  const mainMenuLinks = ['About', 'Projects', 'Demo', 'Resume'];

  return (
    <header id="header-primary" className="header-primary inner-x">
      <div className="col-wide">
        <MainMenu links={mainMenuLinks} />
        <UserNavigation />
      </div>
    </header>
  );
};

export default HeaderPrimary;
