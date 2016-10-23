import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import projects from '../../api/projects/data';
import ProjectList from '../components/Project/ProjectList';

const ProjectListContainer = createContainer(() => {
  return {
    projects,
  };
}, ProjectList);

export default ProjectListContainer;
