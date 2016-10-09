import React from 'react';

class BuildingWithPoetic extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <span>
        <span>Building with </span>
        <span className="icon icon-poetic"></span>
      </span>
    );
  }
}

export default BuildingWithPoetic;
