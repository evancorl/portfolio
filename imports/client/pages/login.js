import React from 'react';

import LoginForm from '../components/login/login-form';

const LoginView = () => (
  <div className="col-left">
    <div className="content-box inner-hor inner-ver authentication mobile-view">
      {/* <div className="header">
        <nav className="inner-ver mobile-nav">
          <a className="mobile-back icon-back">Back</a>
          <span className="mobile-nav-heading">Log In</span>
        </nav>
      </div> */}
      <LoginForm />
    </div>
  </div>
);

export default LoginView;
