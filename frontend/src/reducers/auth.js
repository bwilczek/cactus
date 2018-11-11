const initialState = {
  token: '<none>'
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_UPDATE_TOKEN': {
      return action.payload
    }
    default:
    // do nothing
  }
  return state
}
