import axios from 'axios';

export function fetchToken() {
  return (dispatch) => {
    axios.get('/session').then(
      (response) => {
        dispatch(updateToken(response.data))
      },
      (error) => {
        console.log('XHR_REQUEST_FAILED: ', error)
        // dispatch({type: 'XHR_REQUEST_FAILED', payload: error})
      }
    )
  }
}


export function updateToken(data) {
  return {
    type: 'AUTH_UPDATE_TOKEN',
    payload: data
  }
}
