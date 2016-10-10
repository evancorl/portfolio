import React from 'react';

class EzInput extends React.Component {
  constructor(props) {
    super(props);

    this.renderErrorMessage = this.renderErrorMessage.bind(this);
  }

  renderErrorMessage(placement) {
    const { errorMessage, errorBeforeInput } = this.props;

    const shouldRender = errorMessage && 
      (placement === 'BEFORE' && errorBeforeInput || placement === 'AFTER' && !errorBeforeInput);

    return shouldRender
      ? <span className="ez-error-msg">{errorMessage}</span>
      : null;
  }

  render() {
    const {
      children,
      className,
      errorMessage,
    } = this.props;

    let inputClass = 'ez-input';

    if (className) inputClass += ' ' + className;
    if (errorMessage) inputClass += ' ez-error';

    return (
      <div className={inputClass}>
        {this.renderErrorMessage('BEFORE')}
        {children}
        {this.renderErrorMessage('AFTER')}
      </div>
    );
  }
}

EzInput.propTypes = {
  errorMessage: React.PropTypes.string,
  errorBeforeInput: React.PropTypes.bool,
};

EzInput.defaultProps = {
  errorMessage: null,
  errorBeforeInput: false,
};

export default EzInput;
