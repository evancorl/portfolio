import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AppContainer from '../containers/AppContainer';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import DemoPage from '../pages/DemoPage';
import LoadingSpinner from '../components/Utility/LoadingSpinner';
import LoginPage from '../pages/LoginPage';
import ProjectsPage from '../pages/ProjectsPage';
import ResumePage from '../pages/ResumePage';
import SignupPage from '../pages/SignupPage';

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
