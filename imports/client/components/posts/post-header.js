import React from 'react';
import { Link } from 'react-router';

import Avatar from '../avatar';
import TimeElapsed from '../utility/time-elapsed';

class PostHeader extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { _id, username, avatar, createdAt, type, media } = this.props.post;

    const profileLink = `/profile/${username}`;
    const postLink = `/post/${_id}`;

    return (
      <header className="post-header inner-x">
        <Avatar link={profileLink} image={avatar} className="post-avatar" />
        <div className="post-info wrapper">
          <div className="post-users">
            <Link className="post-username" to={profileLink}>{username}</Link>
          </div>
          <ul className="post-link-list">
            <li className="post-link-item">
              <Link to={postLink}>
                <TimeElapsed date={createdAt} />
              </Link>
            </li>
            <li className="post-link-item">
              <Link to={postLink}>{type}</Link>
            </li>
            {!media.source ? null : (
              <li className="post-link-item">
                <Link to={postLink}>{media.source}</Link>
              </li>
            )}
          </ul>
          <button type="button" className="icon icon-down post-more-options"></button>
        </div>
      </header>
    );
  }
}

PostHeader.propTypes = {
  post: React.PropTypes.object.isRequired,
};

export default PostHeader;
