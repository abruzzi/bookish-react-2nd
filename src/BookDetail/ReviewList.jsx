import React from 'react';

const ReviewList = ({reviews = []}) => {
  return (<div data-test="reviews-container">
    {
      reviews.map((review, index) =>
      <div key={index} className="review">
        <span className="name">{review.name}</span>
        <span className="date">{review.date}</span>
        <p className="content">{review.content}</p>
      </div>)
    }
  </div>)
};

export default ReviewList;