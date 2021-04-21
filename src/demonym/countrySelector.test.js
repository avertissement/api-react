import React from 'react'
import ReactDOM from 'react-dom';
import CountrySelector from './countrySelector.js';

describe('CountrySelector Component', () => {
  it('renders without issues', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CountrySelector />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});