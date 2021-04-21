import React from 'react';
import BookmarksApp from './bookmarks';
import BooksAPIApp from './books-api';
import DemonymApp from './demonym';

export default function App() {
  return (
    <div className="App">
      <DemonymApp />
      <hr />
      <BookmarksApp />
      <hr />
      <BooksAPIApp />
    </div>
  );
}