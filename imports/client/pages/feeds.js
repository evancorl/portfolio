import React from 'react';

import PageMenu from '../components/page-menu';

const Feeds = () => {
  const pageMenuLinks = [
    'Following',
    'Popular',
    'Brands',
    'Cities',
    'Regions',
    'Countries',
  ];

  return (
    <PageMenu links={pageMenuLinks} baseUrl="/feeds" />
  );
};

export default Feeds;
