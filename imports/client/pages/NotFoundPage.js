import React from 'react';
import { Link } from 'react-router';

class NotFoundPage extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="not-found-page">
        <h1 className="not-found-title">Error 404</h1>
        <img className="not-found-img" src="/images/not-found.gif" />
        <p className="not-found-msg inner-hor">
          You look lost... Let me take you <Link to="/">home</Link>.
        </p>
      </div>
    );
  }
}

export default NotFoundPage;
