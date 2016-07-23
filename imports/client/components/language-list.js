import React from 'react';

class LanguageList extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { languages } = this.props;

    return (
      <ul className="language-list">
        {
          languages.map((language, i) => (
            <li key={i} className="language-item">
              {language}
            </li>
          ))
        }
      </ul>
    );
  }
}

LanguageList.propTypes = {
  languages: React.PropTypes.array.isRequired,
};

export default LanguageList;
