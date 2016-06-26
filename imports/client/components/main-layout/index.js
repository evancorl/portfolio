import React from 'react';

import HeaderPrimary from './header-primary';
import HeaderSecondary from './header-secondary';
// import Footer from './footer';
import MobileMenu from './mobile-menu';
import LoadingSpinner from '../utility/loading-spinner';

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

    if (this.props.currentUser === undefined) {
      return <LoadingSpinner className="loading-spinner-box" />;
    }

    return (
      <div id="app-container">
        <HeaderPrimary />
        <HeaderSecondary />
        <main id="main-content" className="container">
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
