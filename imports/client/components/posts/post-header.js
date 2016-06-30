import React from 'react';
import { Link } from 'react-router';

import Avatar from '../avatar';
import TimeElapsed from '../utility/time-elapsed';

class PostHeader extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { username, avatar } = this.props.user;
    const { _id, createdAt, type, source } = this.props.post;

    const profileLink = `/profile/${username}`;
    const postLink = `/post/${_id}`;

    return (
      <header className="post-header inner-x">
        <Avatar link={profileLink} image={avatar || '/images/avatar.jpg'} className="post-avatar" />
        <div className="post-info wrapper">
          <div className="post-users">
            <Link className="post-username" to={profileLink}>{username || 'evancorl'}</Link>
          </div>
          <ul className="post-link-list">
            <li className="post-link-item">
              <Link to={postLink}>
                <TimeElapsed date={createdAt || new Date()} />
              </Link>
            </li>
            <li className="post-link-item">
              <Link to={postLink}>{type || 'Video'}</Link>
            </li>
            <li className="post-link-item">
              <Link to={postLink}>{source || 'Facebook'}</Link>
            </li>
          </ul>
          <button type="button" className="icon icon-down post-more-options"></button>
        </div>
      </header>
    );
  }
}

PostHeader.propTypes = {
  user: React.PropTypes.object.isRequired,
  post: React.PropTypes.object.isRequired,
};

export default PostHeader;
