import axios from 'axios';
import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED,
  LOGIN_SIGNUP_MODAL_HIDDEN
} from './types';
// import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
  dispatch({
    type: USER_LOADED
  });
  // if (localStorage.token) {
  //   setAuthToken(localStorage.token);
  // }
  // try {
  //   const res = await axios.get('/api/auth');
  //   dispatch({
  //     type: USER_LOADED,
  //     payload: res.data
  //   });
  // } catch (err) {
  //   dispatch({
  //     type: AUTH_ERROR
  //   });
  // }
};

// Register User
export const register = ({ email, password }) => async dispatch => {
  dispatch({
    type: REGISTER_SUCCESS
  });
  dispatch({
    type: LOGIN_SIGNUP_MODAL_HIDDEN
  });
  dispatch(loadUser());
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // };
  // const body = JSON.stringify({ email, password });
  // try {
  //   const res = await axios.post('/api/user', body, config);
  //   dispatch({
  //     type: REGISTER_SUCCESS,
  //     payload: res.data
  //   });
  //   dispatch(loadUser());
  // } catch (err) {
  //   const errors = err.response.data.errors;
  //   if (errors) {
  //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
  //   }
  //   dispatch({
  //     type: REGISTER_FAIL
  //   });
  // }
};

// Login User
export const login = (email, password) => async dispatch => {
  dispatch({
    type: LOGIN_SUCCESS
  });
  dispatch({
    type: LOGIN_SIGNUP_MODAL_HIDDEN
  });
  dispatch(loadUser());
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // };
  // const body = JSON.stringify({ email, password });
  // try {
  //   const res = await axios.post('/api/auth', body, config);
  //   dispatch({
  //     type: LOGIN_SUCCESS,
  //     payload: res.data
  //   });
  //   dispatch(loadUser());
  // } catch (err) {
  //   const errors = err.response.data.errors;
  //   if (errors) {
  //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger', 3000)));
  //   }
  //   dispatch({
  //     type: LOGIN_FAIL
  //   });
  // }
};

// Logout
export const logout = () => dispatch => {
  // dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
