import React from 'react';

import MainMenu from './main-menu';
import UserNavigation from '../user-navigation';

const HeaderPrimary = () => {
  const mainMenuLinks = ['feeds', 'browse', 'scenes', 'discuss'];

  return (
    <header id="header-primary" className="header-primary container">
      <div className="col-wide">
        <MainMenu links={mainMenuLinks} />
        <UserNavigation />
      </div>
    </header>
  );
};

export default HeaderPrimary;
