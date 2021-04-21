import React from 'react';
import BookmarkApp from './bookmarks/App';
import DemonymApp from './demonym/demonymApp';

export default function App() {
  return (
    <div className="App">
      <DemonymApp />
      <BookmarkApp />
    </div>
  );
}