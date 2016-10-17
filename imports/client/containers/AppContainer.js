import { createContainer } from 'meteor/react-meteor-data';

import MainLayout from '../components/MainLayout';

const AppContainer = createContainer(() => {
  const currentUser = {};

  return {
    currentUser,
  };
}, MainLayout);

export default AppContainer;
