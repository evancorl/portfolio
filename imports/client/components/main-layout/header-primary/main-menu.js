import React from 'react';
import { Link } from 'react-router';

import MainMenuItem from './main-menu-item';

class MainMenu extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { location: key } = this.context;

    return key !== nextContext.location.key;
  }

  render() {
    const { links } = this.props;

    return (
      <nav className="main-menu col-left">
        <Link to="/" className="main-menu-logo logo">
          <span className="logo-text-skate">skate</span>
          <span className="logo-text-scenes">scenes</span>
        </Link>
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
