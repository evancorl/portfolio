import React from 'react';

const FooterConnectList = ({ list }) => (
  <ul className="footer-connect-list">
    {Object.keys(list).map((service, i) => (
      <li key={i} className={`footer-connect-item icon icon-${service.toLowerCase()}`}>
        <a href={list[service]} target={service === 'Email' ? '_self' : '_blank'}>{service}</a>
      </li>
    ))}
  </ul>
);

FooterConnectList.propTypes = {
  list: React.PropTypes.object.isRequired,
};

export default FooterConnectList;
