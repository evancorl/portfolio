import React from 'react';

class LoadingSpinner extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { className } = this.props;
    const loadingSpinnerClass = `loading-spinner ${className || ''}`;

    return (
      <div className={loadingSpinnerClass}>
        <img src="/images/loading-red.svg" />
      </div>
    );
  }
}

LoadingSpinner.propTypes = {
  className: React.PropTypes.string,
};

export default LoadingSpinner;
