import React from 'react';

class TextBox extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { className, children } = this.props;

    return className !== nextProps.children || children !== nextProps.children;
  }

  render() {
    const {
      className,
      children,
      ...other,
    } = this.props;

    const textBoxClass = `text-box ${className || ''}`;

    return (
      <div className={textBoxClass}>
        {children}
        <span className="wrapper">
          <input
            {...other}
          />
        </span>
      </div>
    );
  }
}

TextBox.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.element,
};

export default TextBox;
