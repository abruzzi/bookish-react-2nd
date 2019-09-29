import React from "react";
import ReviewList from './ReviewList';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";

const BookDetail = ({book}) => {
  return (<div className="detail">
    <h2 className="book-title">{book.name}</h2>
    <p className="book-description">{book.description}</p>

    <form noValidate autoComplete="off">
      <TextField
        label="Name"
        name="name"
        margin="normal"
        variant="outlined"
      />

      <TextField
        name="content"
        label="Content"
        margin="normal"
        variant="outlined"
        multiline
        rowsMax="4"
      />

      <Button variant="contained" color="primary" name="submit">
        Submit
      </Button>
    </form>

    {book.reviews && <ReviewList reviews={book.reviews}/>}
  </div>)
}

export default BookDetail;