import React from 'react';

import HeaderPrimary from './header-primary';
import HeaderSecondary from './header-secondary';
// import Footer from './footer';
import MobileMenu from './mobile-menu';

class MainLayout extends React.Component {
  getChildContext() {
    const { location, currentUser } = this.props;

    return {
      location,
      currentUser,
    };
  }

  render() {
    const mobileMenuLinks = ['feeds', 'browse', 'post', 'discuss', 'profile'];

    return this.props.currentUser === undefined ? null : (
      <div id="app-container">
        <HeaderPrimary />
        <HeaderSecondary />
        <main id="main-content" className="inner-x">
          <div className="col-wide">
            {this.props.children}
          </div>
        </main>
        {/* <Footer /> */}
        <MobileMenu links={mobileMenuLinks} />
      </div>
    );
  }
}

MainLayout.propTypes = {
  location: React.PropTypes.object.isRequired,
  currentUser: React.PropTypes.object,
  children: React.PropTypes.element,
};

MainLayout.childContextTypes = {
  location: React.PropTypes.object.isRequired,
  currentUser: React.PropTypes.object,
};

export default MainLayout;
