import React from 'react';

import PageMenu from '../components/page-menu';

const Home = () => {
  const pageMenuLinks = [
    'following',
    'skaters',
    'brands',
    'cities',
    'regions',
    'countries',
  ];

  // const pageMenuLinks = [
  //   'boards',
  //   'apparel',
  //   'footwear',
  //   'parts',
  //   'accessories',
  //   'videos',
  // ];

  return (
    <PageMenu links={pageMenuLinks} baseUrl="/feeds" />
  );
};

export default Home;
