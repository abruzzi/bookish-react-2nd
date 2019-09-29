import React, {useState} from "react";
import Button from "@material-ui/core/Button/Button";

const Review = ({review}) => {
  const [editing, setEditing] = useState(false);

  return (<div className="review">

    <span className="name">{review.name}</span>
    <span className="date">{review.date}</span>
    <p className="content">{review.content}</p>

    <Button variant="contained" color="primary" name="submit" onClick={() => setEditing(!editing)}>
      {!editing ? "Edit" : "Submit"}
    </Button>
  </div>)
};

export default Review;