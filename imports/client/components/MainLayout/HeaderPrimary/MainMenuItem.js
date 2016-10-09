import React from 'react';
import Scroll from 'react-scroll';

const ScrollLink = Scroll.Link;

const MainMenuItem = ({ link }) => (
  <li className="main-menu-item">
    <ScrollLink
      className="active-border"
      to={`${link.toLowerCase()}`}
      smooth={true}
      offset={-50}
      duration={500}>
      {link}
    </ScrollLink>
  </li>
);

MainMenuItem.propTypes = {
  link: React.PropTypes.string.isRequired,
};

export default MainMenuItem;
