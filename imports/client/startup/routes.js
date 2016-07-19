import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AppContainer from '../containers/app';
import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
import DemoPage from '../pages/demo';
import LoadingSpinner from '../components/utility/loading-spinner';
import LoginPage from '../pages/login';
import ProjectsPage from '../pages/projects';
import ResumePage from '../pages/resume';
import SignupPage from '../pages/sign-up';

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
        <IndexRoute component={AboutPage} onEnter={scrollToTop} />
        {route('about', AboutPage)}
        {route('projects', ProjectsPage)}
        {route('demo', DemoPage)}
        {route('resume', ResumePage)}
        {route('contact', ContactPage)}
        {route('login', LoginPage)}
        {route('sign-up', SignupPage)}
        {route('post', null)}
        {route('logout', LoadingSpinner, logout)}
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
};

export default renderRoutes;
