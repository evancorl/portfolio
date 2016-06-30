import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import MainLayout from '../components/main-layout';

const AppContainer = createContainer(() => {
  const currentUser = Meteor.user();

  return {
    currentUser,
  };
}, MainLayout);

export default AppContainer;
