import { fetchBooks, fetchABook, saveReview, updateReview, saveBook } from './actions'
import * as types from '../types'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import axios from 'axios'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('BookListContainer related actions', () => {

  describe('Fetching data from remote', () => {
    it('Fetch data successfully', () => {
      const books = [
        {id: 1, name: 'Refactoring'},
        {id: 2, name: 'Domain-driven design'}
      ]
      axios.get = jest.fn().mockImplementation(() => Promise.resolve({data: books}))

      const expectedActions = [
        { type: types.FETCH_BOOKS_PENDING},
        { type: types.FETCH_BOOKS_SUCCESS, payload: books }
      ]
      const store = mockStore({books: [], search: { term: '' } })

      return store.dispatch(fetchBooks()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

    it('Search data with term in state', () => {
      const books = [
        {id: 1, name: 'Refactoring'},
        {id: 2, name: 'Domain-driven design'}
      ]
      axios.get = jest.fn().mockImplementation(() => Promise.resolve({data: books}))

      const store = mockStore({books: [], search: {term: 'domain' }})

      return store.dispatch(fetchBooks('')).then(() => {
        expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/books?q=')
      })
    })

    it('Fetch book by id', () => {
      const book = {id: 1, name: 'Refactoring'}
      axios.get = jest.fn().mockImplementation(() => Promise.resolve({data: book}))

      const store = mockStore({books: [], search: {term: '' }})

      return store.dispatch(fetchABook(1)).then(() => {
        expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/books/1')
      })
    })

    it('Save a review for a book', () => {
      const config = {
        headers: { 'Content-Type': 'application/json' }
      }

      const review = {
        name: 'Juntao Qiu',
        content: 'Excellent work!'
      }
      axios.post = jest.fn().mockImplementation(() => Promise.resolve({}))

      const store = mockStore({books: [], search: {term: '' }})

      return store.dispatch(saveReview(1, review)).then(() => {
        expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/books/1/reviews', JSON.stringify(review), config)
      })
    })

    it('Update a review for a book', () => {
      const config = {
        headers: { 'Content-Type': 'application/json' }
      }

      const review = {
        name: 'Juntao Qiu',
        content: 'Excellent work!'
      }

      axios.put = jest.fn().mockImplementation(() => Promise.resolve({}))

      const store = mockStore({books: [], search: {term: '' }})

      return store.dispatch(updateReview(1, review)).then(() => {
        expect(axios.put).toHaveBeenCalledWith('http://localhost:8080/reviews/1', JSON.stringify(review), config)
      })
    })

    it('Fetch data with error', () => {
      axios.get = jest.fn().mockImplementation(() => Promise.reject({message: 'Something went wrong'}))

      const expectedActions = [
        { type: types.FETCH_BOOKS_PENDING},
        { type: types.FETCH_BOOKS_FAILED, payload: {message: 'Something went wrong' }}
      ]
      const store = mockStore({books: [], search: {term: '' }})

      return store.dispatch(fetchBooks()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

    it('Save a book', () => {
      const config = {
        headers: { 'Content-Type': 'application/json' }
      };

      const book = {
        name: 'Acceptance Test Driven Development with React',
        description: 'This book describes how to apply the Acceptance Test Driven Development',
        authors: [
          {id: 1, name: 'Juntao Qiu', profile: 'A Web Application Developer @ ThoughtWorks'},
        ]}

      axios.post = jest.fn().mockImplementation(() => Promise.resolve({}))

      const store = mockStore({books: [], search: {term: '' }})

      return store.dispatch(saveBook(book)).then(() => {
        expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/books', JSON.stringify(book), config)
      })
    })
  })
})