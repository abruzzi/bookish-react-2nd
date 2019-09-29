import * as types from '../types'

export default (state = {}, action) => {
  switch (action.type) {
    case types.SET_SEARCH_TERM:
      return {term: action.payload.term}
    default:
      return state
  }
}