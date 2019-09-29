import errors from './errors'

describe('Errors handling', () => {
  it('Inject error message into global context', () => {
    const initState = {}
    const action = {type: 'FETCH_BOOK_FAILED', payload: { message: '404 - Not Found' }}

    const state = errors(initState, action)

    expect(state['FETCH_BOOK']).toEqual('404 - Not Found')
  })

  it('Clear up error message when request is send', () => {
    const initState = {}
    const action = {type: 'FETCH_BOOK_PENDING', payload: { message: '404 - Not Found' }}

    const state = errors(initState, action)

    expect(state['FETCH_BOOK']).toEqual("")
  })

  it('Pass it through when its not a request', () => {
    const initState = {}
    const action = {type: 'REALLY_SIMPLE_ACTION'}

    const state = errors(initState, action)

    expect(state).toEqual(initState)
  })


  it('Pass it through when request doesnt have payload', () => {
    const initState = {}
    const action = {type: 'FETCH_SOMETHING_PENDING'}

    const state = errors(initState, action)

    expect(state).toEqual(initState)
  })
})