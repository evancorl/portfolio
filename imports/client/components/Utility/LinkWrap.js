import React from 'react';
import { Link } from 'react-router';

class LinkWrap extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { link, children } = this.props;

    return link !== nextProps.link || children !== nextProps.children;
  }

  render() {
    const {
      link,
      children,
      ...other,
    } = this.props;

    return link
      ? <Link {...other} to={link}>{children}</Link>
      : <span {...other}>{children}</span>;
  }
}

LinkWrap.propTypes = {
  link: React.PropTypes.string,
  children: React.PropTypes.element,
};

export default LinkWrap;
