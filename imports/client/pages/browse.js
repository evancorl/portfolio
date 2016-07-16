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
    <PageMenu links={pageMenuLinks} baseUrl="/browse" />
  );
};

export default Browse;
