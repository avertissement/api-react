import React, { Component } from 'react';
import './style.css';
import SearchInput from './components/SearchInput.js';
import Select from "./components/Select.js"


const bookTypesData = [
  {
    id: 1,
    label: 'partial',
    value: 'partial'
  },
  {
    id: 2,
    label: 'full',
    value: 'full'
  },
  {
    id: 3,
    label: 'free-ebooks',
    value: 'freeEbooks'
  },
  {
    id: 4,
    label: 'paid-ebooks',
    value: 'paidEbooks'
  },
  {
    id: 5,
    label: 'ebooks',
    value: 'eBooks'
  }
];

const printTypesData = [
  {
    id: 6,
    label: 'all',
    value: 'all'
  },
  {
    id: 7,
    label: 'books',
    value: 'books'
  },
  {
    id: 8,
    label: 'magazines',
    value: 'magazines'
  }
];

export default class BookmarksAPIApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: null,
      bookTypeSelect: null,
      printTypeSelect: null
    };
  };

  keywordChange(keyword) {
    this.setState({
      keyword
    });
  };


  bookTypeChange(bookType) {
    this.setState({
      bookTypeSelect: bookType
    })
  }

  printTypeChange(printType) {
    this.setState({
      printTypeSelect: printType
    })
  }

  render() {
    return (
      <div>
        <SearchInput keywordChange={keyword => this.keywordChange(keyword)} />
        <Select choices={bookTypesData} label="Book Type" bookTypeChange={bookType => this.bookTypeChange(bookType)} />
        <Select choices={printTypesData} label="Print Type" printTypeChange={printType => this.printTypeChange(printType)} />
      </div>
    );
  };

};
