import React from 'react';
import { browserHistory } from 'react-router';

import TextBox from '../utility/text-box';

class SearchBar extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  _submitSearch(evt) {
    evt.preventDefault();

    const searchTerm = evt.target.q.value;

    browserHistory.push(`/browse?q=${searchTerm}`);
  }

  render() {
    return (
      <form
        action="/shop"
        method="post"
        className="search-form col-left"
        onSubmit={this._submitSearch}
      >
        <TextBox
          name="q"
          type="text"
          placeholder="Search"
          autoComplete="off"
          className="search-text-box"
        >
          <button type="submit" className="icon icon-search search-button"></button>
        </TextBox>
      </form>
    );
  }
}

export default SearchBar;
