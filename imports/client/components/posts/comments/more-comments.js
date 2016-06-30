import React from 'react';

class MoreComments extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.count !== nextProps.count;
  }

  render() {
    const { count } = this.props;

    const moreCommentsButton = (
      <button type="button" className="post-more-comments inner-x">
        <strong>{count}</strong> more comments
        <span className="f-right">(view more)</span>
      </button>
    );

    return count ? moreCommentsButton : null;
  }
}

MoreComments.propTypes = {
  count: React.PropTypes.number.isRequired,
};

export default MoreComments;
