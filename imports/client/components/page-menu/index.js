import React from 'react';
import { Link } from 'react-router';

class PageMenu extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { location: key } = this.context;

    return key !== nextContext.location.key;
  }

  render() {
    const { className, baseUrl, links } = this.props;

    const pageMenuClass = `page-menu content-box ${className || ''}`;

    return (
      <div className={pageMenuClass} method="get">
        <ul className="page-menu-list inner-y">
          {
            links.map((link, i) => {
              const lowercaseLink = link.toLowerCase();
              const capitalizedLink = link.charAt(0).toUpperCase() + link.slice(1);

              const path = (baseUrl ? `${baseUrl}/` : '/') + lowercaseLink;

              return (
                <li key={i} className="page-menu-item">
                  <Link to={path} className={`icon icon-${lowercaseLink}`} activeClassName="active">
                    {capitalizedLink}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

PageMenu.propTypes = {
  links: React.PropTypes.array.isRequired,
  className: React.PropTypes.string,
  baseUrl: React.PropTypes.string,
};

PageMenu.contextTypes = {
  location: React.PropTypes.object.isRequired,
};

export default PageMenu;
