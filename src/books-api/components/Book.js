import React from 'react';

export default class Book extends React.Component {

  render() {

    return (
      <div>
        <div>
          <br />
          { this.props.id === 0 ? <hr /> : null }
          <p>{this.props.display.volumeInfo.title ? this.props.display.volumeInfo.title : '(No Title)'}</p>
          <img src={this.props.display.volumeInfo.imageLinks.smallThumbnail} alt="Book Cover" />
          <p>Price: {this.props.display.saleInfo.saleability ? this.props.display.saleInfo.saleability : '(No Price Info)'}</p>
          {this.props.display.searchInfo && (
            <p dangerouslySetInnerHTML={{ __html: this.props.display.searchInfo.textSnippet}}></p>
          )}
          <p>Author: {this.props.display.volumeInfo.authors ? this.props.display.volumeInfo.authors : '(No Set Author)'}</p>
          <p>Published: {this.props.display.volumeInfo.publishedDate ? this.props.display.volumeInfo.publishedDate : '(No Published Date)'}</p>
        </div>
        <hr />
      </div>
    )
  }
}