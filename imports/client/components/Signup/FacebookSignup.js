import { Meteor } from 'meteor/meteor';
import React from 'react';
// import facebook from 'fb';

const {
  // FACEBOOK_APP_ID,
  FACEBOOK_APP_PERMISSIONS,
  // FACEBOOK_REDIRECT_URI,
} = Meteor.settings.public;

class FacebookSignup extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  _loginWithFacebook() {
    Meteor.loginWithFacebook({
      requestPermissions: FACEBOOK_APP_PERMISSIONS,
      loginStyle: 'redirect',
      redirectUrl: `${Meteor.absoluteUrl.defaultOptions.rootUrl}profile`,
    });
  }

  render() {
    // const loginUrl = facebook.getLoginUrl({
    //   appId: FACEBOOK_APP_ID,
    //   scope: FACEBOOK_APP_PERMISSIONS,
    //   redirect_uri: FACEBOOK_REDIRECT_URI,
    // });

    return (
      <button type="button" className="button red" onClick={this._loginWithFacebook}>
        Log in with Facebook
      </button>
    );
  }
}

export default FacebookSignup;
