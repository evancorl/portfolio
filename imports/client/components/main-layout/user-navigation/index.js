import React from 'react';

import HeaderDashboard from './header-dashboard';
import HeaderUser from './header-user';

const UserNavigation = () => (
  <nav className="user-navigation col-right">
    <HeaderDashboard />
    <HeaderUser />
  </nav>
);

export default UserNavigation;
