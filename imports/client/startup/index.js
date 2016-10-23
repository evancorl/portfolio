import '../styles/css/main.css';
import renderRoutes from './routes';

Meteor.startup(() => {
  renderRoutes();
});
