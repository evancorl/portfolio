import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


import AppContainer from '../containers/AppContainer';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';

const route = (path, component, onEnter) => (
  <Route path={path} component={component} onEnter={onEnter} />
);

const renderRoutes = () => {
  render(
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={AboutPage} />
        {route('home', AboutPage)}
        {route('*', NotFoundPage)}
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
};

export default renderRoutes;
