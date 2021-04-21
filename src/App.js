import React from 'react';
import BookmarksApp from './bookmarks';
import BooksApp from './books-api/booksApp';
import DemonymApp from './demonym';

export default function App() {
  return (
    <div className="App">
      <DemonymApp />
      <hr />
      <BookmarksApp />
      <hr />
      <BooksApp />
    </div>
  );
}