import {useRemoteService} from "../hooks";
import React, {Fragment, useEffect, useState} from "react";
import BookList from "./BookList";
import SearchBox from "./SearchBox";

const BookListContainer = () => {
  const [term, setTerm] = useState('');
  const {data, loading, error, setUrl} = useRemoteService('http://localhost:8080/books', []);

  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${term}`)
  }, [term]);

  const onSearch = (event) => setTerm(event.target.value);

  return (<Fragment>
    <SearchBox term={term} onSearch={onSearch}/>
    <BookList books={data} loading={loading} error={error}/>
  </Fragment>);
}

export default BookListContainer;