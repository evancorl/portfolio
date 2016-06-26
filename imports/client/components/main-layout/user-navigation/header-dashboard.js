import React from 'react';
import { Link } from 'react-router';

class HeaderDashboard extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { location: key, currentUser } = this.context;

    return key !== nextContext.location.key || currentUser !== nextContext.currentUser;
  }

  _signUpView() {
    return (
      <div className="header-sign-up">
        <Link to="/sign-up" className="header-sign-up-button button red ">Sign Up</Link>
      </div>
    );
  }

  _userView() {
    const dashboardLinks = [
      'messages',
      'notifications',
    ];

    return (
      <div className="header-dashboard">
        <span className="header-primary-divider header-dashboard-divider"></span>
        {
          dashboardLinks.map((link, i) => {
            const className = `icon icon-${link}`;

            return (
              <span key={i} className="header-dashboard-item">
                <Link to={`/${link}`} className={className} />
              </span>
            );
          })
        }
        <Link to="/post" className="header-post-button button red ">New Post</Link>
      </div>
    );
  }

  render() {
    const view = this.context.currentUser ? this._userView() : this._signUpView();

    return view;
  }
}

HeaderDashboard.contextTypes = {
  location: React.PropTypes.object.isRequired,
  currentUser: React.PropTypes.object,
};

export default HeaderDashboard;
