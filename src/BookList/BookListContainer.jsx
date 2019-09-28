import {useRemoteService} from "../hooks";
import React, {Fragment, useEffect, useState} from "react";
import BookList from "./BookList";
import TextField from "@material-ui/core/TextField/TextField";

const BookListContainer = () => {
  const [term, setTerm] = useState('');
  const {data, loading, error, setUrl} = useRemoteService('http://localhost:8080/books', []);

  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${term}`)
  }, [term]);

  return (<Fragment>
    <TextField
      label="Search"
      value={term}
      data-test="search"
      onChange={(e) => setTerm(e.target.value)}
      margin="normal"
      variant="outlined"
    />
    <BookList books={data} loading={loading} error={error}/>
  </Fragment>);
}

export default BookListContainer;