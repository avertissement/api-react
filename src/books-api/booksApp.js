import React, { Component } from 'react';
import './style.css';
import SearchInput from './components/SearchInput.js';
import Select from "./components/Select.js";
import Book from './components/Book.js'

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
      printTypeSelect: null,
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

  acquireData() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': "application/json", 
      }
    }
    const theKey = 'AIzaSyC2D-2NiBvyzxBVPSEa5Sbi2WlOCX6mFgw'
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.keyword}&key=${theKey}&printType=${this.state.printTypeSelect}&filter=${this.state.bookTypeSelect}`, options)
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong, please try again later.')
      }
      return response
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        dataResults: data
    }, () => console.log(this.state.dataResults))
    }).catch(err => {
      this.setState({
        error: err.message
      })
    })
  }

  render() {

    const go = this.state.dataResults && this.state.dataResults.items ? 
    this.state.dataResults.items.map((item, index) => {
      return <Book key={index} id={index} display={item} />
    }) : 
    '';

    return (

      <div>
        <SearchInput keywordChange={keyword => this.keywordChange(keyword)} />
        <Select choices={bookTypesData} label="Book Type" bookTypeChange={bookType => this.bookTypeChange(bookType)} />
        <Select choices={printTypesData} label="Print Type" printTypeChange={printType => this.printTypeChange(printType)} />
        <button onClick={() => this.acquireData()}>Acquire Data</button>
        {go}
      </div>

    )

  };

};
