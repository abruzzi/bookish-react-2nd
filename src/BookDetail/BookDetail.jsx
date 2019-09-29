import React from "react";
import ReviewList from './ReviewList';

const BookDetail = ({book}) => {
  return (<div className="detail">
    <h2 className="book-title">{book.name}</h2>
    <p className="book-description">{book.description}</p>
    {book.reviews && <ReviewList reviews={book.reviews}/>}
  </div>)
}

export default BookDetail;