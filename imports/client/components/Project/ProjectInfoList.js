import React from 'react';

const ProjectInfoList = ({ subtitle, list }) => (
  <div className="project-info-list-container">
    <h3 className="project-subtitle">{subtitle}:</h3>
    <ul className="project-info-list">
      {list.map((item, i) => (
        <li key={i} className="project-info-list-item">{item}</li>
      ))}
    </ul>
  </div>
);

ProjectInfoList.propTypes = {
  subtitle: React.PropTypes.string.isRequired,
  list: React.PropTypes.array.isRequired,
};

export default ProjectInfoList;
