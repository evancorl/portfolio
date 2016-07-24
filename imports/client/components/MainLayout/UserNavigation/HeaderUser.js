import React from 'react';
import { Link } from 'react-router';

import Avatar from '../../Avatar';

class HeaderUser extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { location: key, currentUser } = this.context;

    return key !== nextContext.location.key || currentUser !== nextContext.currentUser;
  }

  render() {
    const { currentUser } = this.context;
    const username = currentUser ? currentUser.username : 'Log In';
    const link = currentUser ? '/logout' : '/login';

    return (
      <div className="wrapper">
        <div className="header-user">
          <div className="avatar-box">
            <Avatar link={link} />
          </div>
          <Link
            to={link}
            className="header-username active-hover"
            activeClassName="active"
          >
            {username}
          </Link>
        </div>
      </div>
    );
  }
}

HeaderUser.propTypes = {
  user: React.PropTypes.object,
};

HeaderUser.contextTypes = {
  location: React.PropTypes.object.isRequired,
  currentUser: React.PropTypes.object,
};

export default HeaderUser;
