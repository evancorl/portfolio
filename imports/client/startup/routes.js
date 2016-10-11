import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AppContainer from '../containers/AppContainer';
import AboutPage from '../pages/AboutPage';
import DemoPage from '../pages/DemoPage';
import LoadingSpinner from '../components/Utility/LoadingSpinner';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';

const route = (path, component, onEnter) => (
  <Route path={path} component={component} onEnter={onEnter} />
);

const logout = () => {
  Meteor.logout(error => {
    if (!error) browserHistory.push('/login');
  });
};

const renderRoutes = () => {
  render(
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={AboutPage} />
        {route('home', AboutPage)}
        {route('demo', DemoPage)}
        {route('post', null)}
        {route('login', LoginPage)}
        {route('logout', LoadingSpinner, logout)}
        {route('*', NotFoundPage)}
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
};

export default renderRoutes;
