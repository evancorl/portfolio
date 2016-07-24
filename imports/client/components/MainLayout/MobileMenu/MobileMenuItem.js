import React from 'react';
import { Link } from 'react-router';

const MobileMenuItem = ({ link }) => {
  const lowerCaseLink = link.toLowerCase();

  return (
    <li className="mobile-menu-item">
      <Link
        to={`/${lowerCaseLink}`}
        className={`icon icon-${link.toLowerCase()} active-hover`}
        activeClassName="active"
      />
    </li>
  );
};

MobileMenuItem.propTypes = {
  link: React.PropTypes.string.isRequired,
};

export default MobileMenuItem;
