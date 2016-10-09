import React from 'react';
import { Link } from 'react-router';
import Scroll from 'react-scroll';

import MainMenuItem from './MainMenuItem';

const ScrollLink = Scroll.Link;

class MainMenu extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { location: key } = this.context;

    return key !== nextContext.location.key;
  }

  render() {
    const { links } = this.props;

    return (
      <nav className="main-menu col-left">
        <ScrollLink
          activeClass=""
          className="main-menu-logo logo"
          to="intro"
          smooth={true}
          offset={-50}
          duration={350}
        >
          <span className="logo-text-lower">evan</span>
          <span className="logo-text-upper">CORL</span>
        </ScrollLink>
        <span className="header-primary-divider logo-divider"></span>
        <ul className="main-menu-list">
          {links.map((link, i) => <MainMenuItem key={i} link={link} />)}
        </ul>
      </nav>
    );
  }
}

MainMenu.propTypes = {
  links: React.PropTypes.array.isRequired,
};

MainMenu.contextTypes = {
  location: React.PropTypes.object.isRequired,
};

export default MainMenu;
