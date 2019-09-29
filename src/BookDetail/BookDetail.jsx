import React from "react";
import ReviewList from './ReviewList';
import ReviewForm from "./ReviewForm";

const BookDetail = ({book}) => {
  return (<div className="detail">
    <h2 className="book-title">{book.name}</h2>
    <p className="book-description">{book.description}</p>

    <ReviewForm id={book.id} />

    {book.reviews && <ReviewList bookId={book.id} reviews={book.reviews}/>}
  </div>)
}

export default BookDetail;