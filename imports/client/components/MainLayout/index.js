import React from 'react';

import HeaderPrimary from './HeaderPrimary';
import Footer from './Footer';

class MainLayout extends React.Component {
  getChildContext() {
    const { location, currentUser } = this.props;

    return {
      location,
      currentUser,
    };
  }

  render() {
    return this.props.currentUser === undefined ? null : (
      <div id="app-container">
        <HeaderPrimary />
        <div className="header-spacer"></div>
        <main id="main-content">
          {this.props.children}
        </main>
        <Footer />
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
