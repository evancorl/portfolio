import React from 'react';

import PageMenu from '../page-menu';

const ProfileLayout = ({ children }) => {
  const pageMenuLinks = [
    'profile',
    'dashboard',
    'cart',
    'messages',
    'notifications',
    'settings',
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
