import React from 'react';

import PageMenu from '../components/page-menu';

const Feeds = () => {
  const pageMenuLinks = [
    'following',
    'skaters',
    'brands',
    'cities',
    'regions',
    'countries',
  ];

  return (
    <PageMenu links={pageMenuLinks} baseUrl="/feeds" />
  );
};

export default Feeds;
