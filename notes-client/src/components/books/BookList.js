import React from 'react';

const BookList = (props) => {

  const books = props.books.map((book, index) => {
    return (
      <div className="BookCard" key={book.id} >
        <button onClick={() => props.handleOnClick(book)}>x</button>
        <h4> {book.title}</h4>
        <h5> {book.author}</h5>
        <h5><img className="BookImage" src={book.img_url} alt={book.title} /> </h5>
      </div>
    )
  })

    return (
      <div className="BookContainer">
        <h4> Your Notes </h4>
        {books}
      </div>
    )
  }

export default BookList;
