import './style.css';
import SearchInput from './SearchInput.js';
import Select from "./components/Select"

function BookmarksAPIApp() {

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

  return (
    <div>
      <SearchInput />
      <Select choices={bookTypesData} label="Book Type" />
      <Select choices={printTypesData} label="Print Type" />
    </div>
  );
};

export default BookmarksAPIApp;
