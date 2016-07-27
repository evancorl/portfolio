import React from 'react';

const FooterShareList = ({ list }) => (
  <ul className="footer-share-list">
    {Object.keys(list).map((service, i) => (
      <li key={i} className="footer-share-item">
        <a
          href={list[service]}
          target="_blank"
          className={`icon icon-${service.toLowerCase()}`}
        ></a>
      </li>
    ))}
  </ul>
);

FooterShareList.propTypes = {
  list: React.PropTypes.object.isRequired,
};

export default FooterShareList;
