import React from 'react';
import ReactDOM from 'react-dom';
import Demonym from './demonym.js';

describe('Demonym Component', () => {
  it('renders without issues', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Demonym />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});