import React, {useState} from "react";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";

const Review = ({review}) => {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(review.content);

  return (<div className="review">

    <span className="name">{review.name}</span>
    <span className="date">{review.date}</span>

    {!editing ? <p className="content">{review.content}</p> : (<TextField
      name="content"
      label="Content"
      margin="normal"
      variant="outlined"
      multiline
      rowsMax="4"
      value={content}
      onChange={e => setContent(e.target.value)}
    />)}


    <Button variant="contained" color="primary" name="submit" onClick={() => setEditing(!editing)}>
      {!editing ? "Edit" : "Submit"}
    </Button>
  </div>)
};

export default Review;