import axios from 'axios'
import * as types from '../types'

export const fetchBooks = (term) => {
  return (dispatch) => {
    dispatch({type: types.FETCH_BOOKS_PENDING})
    return axios.get(`http://localhost:8080/books?q=${term || ''}`).then((res) => {
      dispatch({type: types.FETCH_BOOKS_SUCCESS, payload: res.data})
    }).catch((err) => {
      dispatch({type: types.FETCH_BOOKS_FAILED, payload: {message: err.message}})
    })
  }
}

export const fetchABook = (id) => {
  return (dispatch) => {
    dispatch({type: types.FETCH_BOOK_PENDING})
    return axios.get(`http://localhost:8080/books/${id}`).then((res) => {
      dispatch({type: types.FETCH_BOOK_SUCCESS, payload: res.data})
    }).catch((err) => {
      dispatch({type: types.FETCH_BOOK_FAILED, payload: {message: err.message}})
    })
  }
}

export const saveReview = (id, review) => {
  const config = {
    headers: { 'Content-Type': 'application/json' }
  }

  return (dispatch) => {
    dispatch({type: types.SAVE_BOOK_REVIEW_PENDING})
    return axios.post(`http://localhost:8080/books/${id}/reviews`, JSON.stringify(review), config).then((res) => {
      dispatch({type: types.SAVE_BOOK_REVIEW_SUCCESS, payload: res.data})
      dispatch(fetchABook(id));
    }).catch((err) => {
      dispatch({type: types.SAVE_BOOK_REVIEW_FAILED, payload: {message: err.message}})
    })
  }
}

export const saveBook = (book) => {
  const config = {
    headers: { 'Content-Type': 'application/json' }
  }

  return (dispatch) => {
    dispatch({type: types.SAVE_BOOK_PENDING})
    return axios.post(`http://localhost:8080/books`, JSON.stringify(book), config).then((res) => {
      dispatch({type: types.SAVE_BOOK_SUCCESS, payload: res.data})
    }).catch((err) => {
      dispatch({type: types.SAVE_BOOK_FAILED, payload: {message: err.message}})
    })
  }
}

export const updateReview = (id, review) => {
  const config = {
    headers: { 'Content-Type': 'application/json' }
  }

  return (dispatch) => {
    dispatch({type: types.SAVE_BOOK_REVIEW_PENDING})
    return axios.put(`http://localhost:8080/reviews/${id}`, JSON.stringify(review), config).then((res) => {
      dispatch({type: types.SAVE_BOOK_REVIEW_SUCCESS, payload: res.data})
      dispatch(fetchABook(review.bookId));
    }).catch((err) => {
      dispatch({type: types.SAVE_BOOK_REVIEW_FAILED, payload: {message: err.message}})
    })
  }
}
