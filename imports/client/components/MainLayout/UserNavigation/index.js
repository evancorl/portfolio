import React from 'react';

import HeaderDashboard from './HeaderDashboard';
import HeaderUser from './HeaderUser';

const UserNavigation = () => (
  <nav className="user-navigation col-right">
    <HeaderDashboard />
    <HeaderUser />
  </nav>
);

export default UserNavigation;
