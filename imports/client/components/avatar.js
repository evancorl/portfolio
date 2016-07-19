import React from 'react';
import LinkWrap from './utility/link-wrap';

class Avatar extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { image, link } = this.props;

    return image !== nextProps.image || link !== nextProps.link;
  }

  render() {
    const {
      image,
      link,
      className,
      ...other,
    } = this.props;

    let avatarClass = image ? 'avatar' : 'avatar none';

    avatarClass = className ? `${avatarClass} ${className}` : avatarClass;

    const avatarContent = image
      ? <img src={image} />
      : <span className="icon icon-user"></span>;

    return (
      <LinkWrap {...other} link={link} className={avatarClass}>
        {avatarContent}
      </LinkWrap>
    );
  }
}

Avatar.propTypes = {
  image: React.PropTypes.string,
  link: React.PropTypes.string,
  className: React.PropTypes.string,
};

export default Avatar;
