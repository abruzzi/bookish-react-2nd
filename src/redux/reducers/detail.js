import * as types from '../types'

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_BOOK_SUCCESS:
      return { ...action.payload }
    default:
      return state
  }
}