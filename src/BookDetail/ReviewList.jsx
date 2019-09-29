import React from 'react';
import Review from "./Review";

const ReviewList = ({reviews = []}) => {
  return (<div data-test="reviews-container">
    {
      reviews.map((review, index) => <Review key={index} review={review}/>)
    }
  </div>)
};

export default ReviewList;