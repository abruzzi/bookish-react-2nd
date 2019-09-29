import axios from 'axios'

import * as actions from './redux/actions/actions'
import store from './store'

describe('Store', () => {
  const books = [
    {id: 1, name: 'Refactoring'}
  ]

  it('Fetch books from remote', () => {
    axios.get = jest.fn().mockImplementation(() => Promise.resolve({data: books}))

    return store.dispatch(actions.fetchBooks()).then(() => {
      const state = store.getState()
      expect(state.books.length).toEqual(1)
      expect(state.books).toEqual(books)
    })
  })

  it('Feach a book from remote', () => {
    axios.get = jest.fn().mockImplementation(() => Promise.resolve({data: books[0]}))

    return store.dispatch(actions.fetchABook(1)).then(() => {
      const state = store.getState()
      expect(state.detail).toEqual(books[0])
    })
  })

  it('Perform a search', () => {
    axios.get = jest.fn().mockImplementation(() => Promise.resolve({data: books}))

    return store.dispatch(actions.fetchBooks('domain')).then(() => {
      expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/books?q=domain')
    })
  })
})