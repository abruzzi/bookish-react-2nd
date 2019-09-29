import React from "react";

const Review = ({review}) => (<div className="review">
  <span className="name">{review.name}</span>
  <span className="date">{review.date}</span>
  <p className="content">{review.content}</p>
</div>);

export default Review;