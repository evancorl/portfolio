import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div id="footer" className="mobile-hidden">
        <ul className="inner-x">
          <li className="footer-column">
            <h3>Site Map</h3>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/feeds">Feeds</Link></li>
              <li><Link to="/browse">Browse</Link></li>
              <li><Link to="/discuss">Discuss</Link></li>
            </ul>
          </li>
          <li className="footer-column">
            <h3>User Navigation</h3>
            <ul>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/dashboard/scene">Scene</Link></li>
              <li><Link to="/dashboard/messages">Messages</Link></li>
              <li><Link to="/dashboard/activity">Activity</Link></li>
              <li><Link to="/dashboard/favorites">Favorites</Link></li>
              <li><Link to="/dashboard/account">Account</Link></li>
              <li><Link to="/logout">Log Out</Link></li>
            </ul>
          </li>
          <li className="footer-column">
            <h3>Learn More</h3>
            <ul>
              <li><Link to="/our-mission">Our Mission</Link></li>
              <li><Link to="/advertise">Advertise</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </li>
          <li id="copyright">
            © {new Date().getFullYear()} <strong>SKATESCENES.COM</strong>
            All Rights Reserved
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
