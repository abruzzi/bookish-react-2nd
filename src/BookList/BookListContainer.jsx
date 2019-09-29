import React, {Fragment, useEffect, useState} from "react";
import BookList from "./BookList";
import SearchBox from "./SearchBox";
import {useDispatch, useSelector} from "react-redux";

import {createSelector} from 'reselect'

import * as actions from '../redux/actions/actions';

const bookListSelector = createSelector([
  state => state.books,
  state => state.loading,
  state => state.errors['FETCH_BOOKS'],
], (books, loading, error) => ({books, loading, error}));

const BookListContainer = () => {
  const [term, setTerm] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchBooks(term))
  }, [term]);

  const {books, loading, error} = useSelector(bookListSelector);

  const onSearch = (event) => setTerm(event.target.value);

  return (<Fragment>
    <SearchBox term={term} onSearch={onSearch}/>
    <BookList books={books} loading={loading} error={error}/>
  </Fragment>);
}

export default BookListContainer;