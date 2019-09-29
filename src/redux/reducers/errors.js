export default (state = {}, action) => {
  const { type, payload } = action;
  const matches = /(.*)_(PENDING|FAILED)/.exec(type);

  if (!matches || !payload) return state;

  const [, name, status] = matches;
  return {
    ...state,
    [name]: status === 'FAILED' ? payload.message : ''
  }
}