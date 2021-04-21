import React from 'react';

export default class SearchInput extends React.Component {
  render() {
    return (
        <form className="search">
          <label htmlFor="searching">Search: </label>
          <input id="searching" name="searching" type="text" placeholder="henry" />
        </form>
    );
  };
};