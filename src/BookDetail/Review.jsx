import React, {useState} from "react";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";
import {useDispatch} from "react-redux";

import * as actions from '../redux/actions/actions';

const Review = ({bookId, review}) => {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(review.content);

  const dispatch = useDispatch();

  const clickHandler = () => {
    if(editing) {
      dispatch(actions.saveReview(bookId, {content}))
    }

    setEditing(!editing);
  };

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


    <Button variant="contained" color="primary" name="submit" onClick={clickHandler}>
      {!editing ? "Edit" : "Submit"}
    </Button>
  </div>)
};

export default Review;