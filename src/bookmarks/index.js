// import React, { Component } from 'react';
// import './index.css';
// import AddBookmark from './AddBookmark.js';
// import BookmarkApp from './BookmarkApp.js';

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       bookmarks: [],
//       showAddForm: false
//     }
//   }

//   componentDidMount() {

//     const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
//     const options = {
//       method: 'GET', 
//       headers: {
//         "Authorization": "Bearer $2a$10$BENFTRtvW0HJ2pVO4wi2YOTNwYMkZ/vJwC2g4AZgcaivhfgbUY0sG",
//         "Content-Type": "application/json"
//       }
//     }

//     fetch(url, options)
//     .then(res => {
//       if(!res.ok) {
//         throw new Error('Something went wrong, please try again later.');
//       }
//       return res
//     }).then(res => res.json())
//     .then(data => {
//       this.setState({
//         bookmarks: data,
//         error: null
//       })
//     }).catch(err => {
//       this.setState({
//         error: err.message
//       })
//     })

//   }

//   addBookmark(bookmark) {
//     this.setState({
//       bookmarks: [...this.state.bookmarks, bookmark],
//       showAddForm: false
//     })
//   }

//   setShowAddForm(show) {
//     this.setState({
//       showAddForm: show
//     })
//   }

//   render() {
//     const page = this.state.showAddForm ? 
//     <AddBookmark showForm={show => this.setShowAddForm(show)} handleAdd={bookmark => this.addBookmark(bookmark)} /> : 
//     <BookmarkApp bookmarks={this.state.bookmarks} showForm={show => this.setShowAddForm(show)} />
//     return (
//       <div className="App">
//         {page}
//       </div>
//     );
//   }

// }

// export default App;