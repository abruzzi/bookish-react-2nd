import React from 'react';
import Review from "./Review";

const ReviewList = ({bookId, reviews = []}) => {
  return (<div data-test="reviews-container">
    {
      reviews.map((review, index) => <Review key={index} review={review} bookId={bookId} />)
    }
  </div>)
};

export default ReviewList;