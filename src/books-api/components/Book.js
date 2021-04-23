import React from 'react';
import './Book.css';

export default class Book extends React.Component {

  render() {

    return (
      <section>
          { this.props.id === 0 ? <hr /> : null }
          <div className="for-flex">

            <img src={this.props.display.volumeInfo.imageLinks.smallThumbnail} alt="Book Cover" />
            <div className="second-bloc">
              <p className="title">{this.props.display.volumeInfo.title ? this.props.display.volumeInfo.title : '(No Title)'}</p>
              <p className="price">Price: {this.props.display.saleInfo.saleability ? this.props.display.saleInfo.saleability : '(No Price Info)'}</p>
              {this.props.display.searchInfo && (
                <div className="text" dangerouslySetInnerHTML={{ __html: `<div>${this.props.display.searchInfo.textSnippet}</div>`}}></div>
              )}
              <p className="author">Author: {this.props.display.volumeInfo.authors ? this.props.display.volumeInfo.authors : '(No Set Author)'}</p>
              <p className="publish">Published: {this.props.display.volumeInfo.publishedDate ? this.props.display.volumeInfo.publishedDate : '(No Published Date)'}</p>
            </div>

          </div>
        <hr />
      </section>
    )
  }
}