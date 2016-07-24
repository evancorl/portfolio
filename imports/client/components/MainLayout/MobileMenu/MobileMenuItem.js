import React from 'react';
import { Link } from 'react-router';

const MobileMenuItem = ({ link }) => (
  <li className="mobile-menu-item">
    <Link
      to={`/${link}`}
      className={`icon icon-${link} active-hover`}
      activeClassName="active"
    />
  </li>
);

MobileMenuItem.propTypes = {
  link: React.PropTypes.string.isRequired,
};

export default MobileMenuItem;
