import React from 'react';

import PageMenu from '../components/page-menu';

const Browse = () => {
  const pageMenuLinks = [
    'Media',
    'Scenes',
    'Brands',
    'Spots',
    'Events',
    'Users',
  ];

  return (
    <div className="col-wide">
      <PageMenu links={pageMenuLinks} baseUrl="/browse" />
    </div>
  );
};

export default Browse;
