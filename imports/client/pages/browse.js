import React from 'react';

import PageMenu from '../components/page-menu';

const Browse = () => {
  const pageMenuLinks = [
    'media',
    'scenes',
    'brands',
    'spots',
    'events',
    'users',
  ];

  return (
    <PageMenu links={pageMenuLinks} baseUrl="/browse" />
  );
};

export default Browse;
