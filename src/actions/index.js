import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER } from './types';

const API_URL = 'http://localhost:3000';

export function signinUser({ email, password }) {
  // our action creators normally return an object with TYPE and PAYLOAD
  // we are returning a function to get direct access to dispatch, via thunk
  // because we have direct access, we can dispatch multiple actions!
  return function(dispatch) {
    // submit email/password to api server
    axios.post(`${API_URL}/signin`, { email, password })
      .then(response => {
        // if successful login, update state to show auth'd user
        dispatch({ type: AUTH_USER });
        // save the jwt token
        localStorage.setItem('token', response.data.token);
        // redirect to /feature route
        browserHistory.push('/feature');
      })
      .catch(() => {
        // if bad login, show error message to user
      });
  }
}
