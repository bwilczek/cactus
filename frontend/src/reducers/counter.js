const initialState = {
 value: 0
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER': {
      return {...state, value: state.value + 1}
    }
    case 'DECREMENT_COUNTER': {
      return {...state, value: state.value - 1}
    }
    default:
      // do nothing
  }
  return state
}
