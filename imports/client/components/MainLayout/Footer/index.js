import { Meteor } from 'meteor/meteor';
import React from 'react';

import FooterShareList from './FooterShareList';
import FooterConnectList from './FooterConnectList';

class Footer extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const emailAddress = 'info@evancorl.com';
    const siteUrl = Meteor.absoluteUrl.defaultOptions.rootUrl;
    const siteTitle = encodeURI('Evan Corl | Houston Web and App Developer');

    const shareList = {
      Facebook: `https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`,
      Twitter: `https://twitter.com/home?status=${siteUrl}`,
      Google: `https://plus.google.com/share?url=${siteUrl}`,
      LinkedIn: `https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}&title=${siteTitle}`,
    };

    const connectList = {
      LinkedIn: 'https://www.linkedin.com/in/evan-corl-84b3a762',
      GitHub: 'https://github.com/evancorl',
      Email: `mailto:${emailAddress}`,
    };

    return (
      <footer id="footer" className="footer inner-hor">
        <div className="col-wide ">
          <div className="footer-col">
            <h3 className="footer-title">Share</h3>
            <FooterShareList list={shareList} />
          </div>
          <div className="footer-col">
            <h3 className="footer-title">Connect</h3>
            <FooterConnectList list={connectList} />
          </div>
          <div className="footer-col footer-copyright">
            <h3 className="footer-title">© {new Date().getFullYear()} Evan Corl</h3>
            <div className="footer-rights-reserved">All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
