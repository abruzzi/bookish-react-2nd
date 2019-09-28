import React from "react";
import {Link} from "react-router-dom";

const BookList = ({loading, error, books}) => {
  if(loading) {
    return <p>Loading...</p>
  }

  if(error) {
    return <p>Error...</p>
  }

  return <div data-test="book-list">
    {
      books.map(book => (<div className="book-item" key={book.id}>
        <h2 className="title">{book.name}</h2>
        <Link to={`/books/${book.id}`}>View Details</Link>
      </div>))
    }
  </div>;
}

export default BookList;