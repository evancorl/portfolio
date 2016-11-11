import React from 'react';
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
          onClick={this.toggleMobileMenu.bind(this, false)}
        >
          <span>evan</span>
          <span className="logo-text-upper">Corl</span>
        </ScrollLink>
        <span
          className={`main-menu-hamburger icon ${showMobileMenu ? 'icon-x' : 'icon-menu'}`}
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
            <a
              href="/files/resume-evan-corl.pdf"
              className="main-menu-cta-btn button red"
              download
            >
              Resume
            </a>
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
