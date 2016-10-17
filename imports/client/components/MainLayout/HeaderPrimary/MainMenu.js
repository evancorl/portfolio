import React from 'react';
import { Link } from 'react-router';
import Scroll from 'react-scroll';

import MainMenuItem from './MainMenuItem';

const ScrollLink = Scroll.Link;

class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMobileMenu: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.showMobileMenu !== nextState.showMobileMenu;
  }

  toggleMobileMenu(showMobileMenu) {
    this.setState({
      showMobileMenu: showMobileMenu,
    });
  }

  render() {
    const { links } = this.props;
    const { showMobileMenu } = this.state;

    return (
      <nav className="main-menu">
        <ScrollLink
          className="main-menu-logo logo"
          to="intro"
          smooth={true}
          offset={-50}
          duration={350}
        >
          <span>evan</span>
          <span className="logo-text-upper">Corl</span>
        </ScrollLink>
        <span
          className="main-menu-hamburger icon icon-menu"
          onClick={this.toggleMobileMenu.bind(this, !showMobileMenu)}
        ></span>
        <ul className={`main-menu-list${showMobileMenu ? '' : ' single-col-hide'}`}>
          {links.map((link, i) => (
            <MainMenuItem
              key={i}
              link={link}
              handleClick={this.toggleMobileMenu.bind(this, false)}
            />
          ))}
          <li className="main-menu-cta">
            <Link to="/files/resume.pdf" className="main-menu-cta-btn button red ">Resume</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

MainMenu.propTypes = {
  links: React.PropTypes.array.isRequired,
};

export default MainMenu;
