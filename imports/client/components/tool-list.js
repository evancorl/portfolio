import React from 'react';

class ToolList extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { tools } = this.props;

    return (
      <ul className="tool-list about-list">
        {
          tools.map((tool, i) => (
            <li key={i} className="tool-item about-item">
              <img className="tool-img" src={`/images/tools/${tool.toLowerCase()}.png`} />
              <div className="tool-name">{tool}</div>
            </li>
          ))
        }
      </ul>
    );
  }
}

ToolList.propTypes = {
  tools: React.PropTypes.array.isRequired,
};

export default ToolList;
