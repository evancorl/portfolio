import React from 'react';
import { browserHistory } from 'react-router';

import TextBox from '../utility/text-box';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this._submitLogin = this._submitLogin.bind(this);

    this.state = {
      errorMessage: null,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.errorMessage !== this.state.errorMessage;
  }

  _submitLogin(evt) {
    evt.preventDefault();

    const user = evt.target.user.value;
    const password = evt.target.password.value;

    const fieldsEmpty = !user.length || !password.length;

    if (fieldsEmpty) {
      this.setState({
        errorMessage: 'Please enter both fields',
      });
    } else {
      Meteor.loginWithPassword(user, password, error => {
        if (error) {
          this.setState({
            errorMessage: error.reason,
          });
        } else {
          browserHistory.push('/');
        }
      });
    }
  }

  render() {
    return (
      <form action="/login" method="post" className="" onSubmit={this._submitLogin}>
        <TextBox type="text" name="user" placeholder="Username or email" maxLength="255" />
        <TextBox type="password" name="password" placeholder="Password" />
        {/* <div className="input-box">
          <input type="checkbox" name="remember" id="login-remember" value="remember" />
          <span className="wrapper">
            <label htmlFor="login-remember">Remember me</label>
          </span>
        </div>
        <br /> */}
        <button type="submit" className="button red icon icon-key">Log In</button>
        {this.state.errorMessage}
      </form>
    );
  }
}

export default LoginForm;
