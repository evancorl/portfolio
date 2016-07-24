import React from 'react';

import MobileMenuItem from './MobileMenuItem';

class MobileMenu extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { location: key } = this.context;

    return key !== nextContext.location.key;
  }

  render() {
    const { links } = this.props;

    return (
      <nav className="mobile-menu">
        <ul>
          {links.map((link, i) => <MobileMenuItem key={i} link={link} />)}
        </ul>
      </nav>
    );
  }
}

MobileMenu.propTypes = {
  links: React.PropTypes.array.isRequired,
};

MobileMenu.contextTypes = {
  location: React.PropTypes.object.isRequired,
};

export default MobileMenu;
