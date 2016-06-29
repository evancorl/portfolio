import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AppContainer from '../components/app-container';
import Browse from '../pages/browse';
import Feeds from '../pages/feeds';
import Home from '../pages/home';
import LoadingSpinner from '../components/utility/loading-spinner';
import Login from '../pages/login';
import Profile from '../pages/profile';
import Signup from '../pages/sign-up';

const scrollToTop = () => window.scrollTo(0, 0);

const route = (path, component, onEnter) => (
  <Route path={path} component={component} onEnter={onEnter || scrollToTop} />
);

const logout = () => {
  scrollToTop();

  Meteor.logout(error => {
    if (!error) browserHistory.push('/login');
  });
};

const renderRoutes = () => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Home} onEnter={scrollToTop} />
        {route('login', Login)}
        {route('sign-up', Signup)}
        {route('feeds', Feeds)}
        {route('feeds/:category', Feeds)}
        {route('browse', Browse)}
        {route('browse/:category', Browse)}
        {route('scenes', null)}
        {route('discuss', null)}
        {route('post', null)}
        {route('profile', Profile)}
        {route('dashboard', Profile)}
        {route('favorites', Profile)}
        {route('messages', Profile)}
        {route('notifications', Profile)}
        {route('settings', Profile)}
        {route('logout', LoadingSpinner, logout)}
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
};

export default renderRoutes;