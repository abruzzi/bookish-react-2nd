import {useRemoteService} from "./hooks";
import React from "react";
import BookList from "./BookList";

const BookListContainer = () => {
  const {data, loading, error} = useRemoteService([]);
  return <BookList books={data} loading={loading} error={error}/>
}

export default BookListContainer;