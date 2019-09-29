import React, {useState} from "react";
import ReviewList from './ReviewList';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import {useDispatch} from "react-redux";
import * as actions from "../redux/actions/actions";

const BookDetail = ({book}) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  return (<div className="detail">
    <h2 className="book-title">{book.name}</h2>
    <p className="book-description">{book.description}</p>

    <form noValidate autoComplete="off">
      <TextField
        label="Name"
        name="name"
        margin="normal"
        variant="outlined"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <TextField
        name="content"
        label="Content"
        margin="normal"
        variant="outlined"
        multiline
        rowsMax="4"
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <Button variant="contained" color="primary" name="submit" onClick={() => dispatch(actions.saveReview(book.id, {name, content}))}>
        Submit
      </Button>
    </form>

    {book.reviews && <ReviewList reviews={book.reviews}/>}
  </div>)
}

export default BookDetail;