import React from 'react';

import PageMenu from '../page-menu';

const ProfileLayout = ({ children }) => {
  const pageMenuLinks = [
    'Profile',
    'Dashboard',
    'Favorites',
    'Messages',
    'Notifications',
    'Settings',
  ];

  return (
    <div className="profile-layout">
      <PageMenu links={pageMenuLinks} />
      {children}
    </div>
  );
};

ProfileLayout.propTypes = {
  children: React.PropTypes.element,
};

export default ProfileLayout;
