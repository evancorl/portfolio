import React from 'react';
import Scroll from 'react-scroll';

const ScrollLink = Scroll.Link;

const MainMenuItem = props => {
  const {
    link,
    handleClick,
    ...other,
  } = props;

  return (
    <li className="main-menu-item">
      <ScrollLink
        className="active-hover"
        to={`${link.toLowerCase()}`}
        smooth={true}
        offset={-50}
        duration={350}
        onClick={handleClick}>
        {link}
      </ScrollLink>
    </li>
  );
};

MainMenuItem.propTypes = {
  link: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func,
};

export default MainMenuItem;
