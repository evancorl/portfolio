import React from 'react';
import { Link } from 'react-router';

const MainMenuItem = ({ link }) => (
  <li className="main-menu-item">
    <Link to={`/${link}`} className="active-border" activeClassName="active">
      {link}
    </Link>
  </li>
);

MainMenuItem.propTypes = {
  link: React.PropTypes.string.isRequired,
};

export default MainMenuItem;
