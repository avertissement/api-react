import React from 'react';
import BookmarksApp from './bookmarks/BookmarksApp';
import DemonymApp from './demonym/demonymApp';

export default function App() {
  return (
    <div className="App">
      <DemonymApp />
      <BookmarksApp />
    </div>
  );
}