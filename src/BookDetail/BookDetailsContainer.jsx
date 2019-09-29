import React, {useEffect} from 'react'
import BookDetail from "./BookDetail";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../redux/actions/actions";

const BookDetailContainer = ({match}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchABook(match.params.id))
  }, []);

  const book = useSelector(state => state.detail);

  return (<BookDetail book={book}/>);
};

export default BookDetailContainer