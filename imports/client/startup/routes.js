import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AppContainer from '../containers/app';
import About from '../pages/about';
import Contact from '../pages/contact';
import Demo from '../pages/demo';
import LoadingSpinner from '../components/utility/loading-spinner';
import Login from '../pages/login';
import Projects from '../pages/projects';
import Resume from '../pages/resume';
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
        <IndexRoute component={About} onEnter={scrollToTop} />
        {route('about', About)}
        {route('projects', Projects)}
        {route('demo', Demo)}
        {route('resume', Resume)}
        {route('contact', Contact)}
        {route('login', Login)}
        {route('sign-up', Signup)}
        {route('post', null)}
        {route('logout', LoadingSpinner, logout)}
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
};

export default renderRoutes;
