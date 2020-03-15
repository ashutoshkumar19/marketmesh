import { LOGIN_MODAL_SHOWN, SIGNUP_MODAL_SHOWN, LOGIN_SIGNUP_MODAL_HIDDEN } from './types';

// Show LoginSignup Modal
export const showLoginSignupModal = tab => async dispatch => {
  if (tab === 'login') {
    dispatch({
      type: LOGIN_MODAL_SHOWN
    });
  } else if (tab === 'signup') {
    dispatch({
      type: SIGNUP_MODAL_SHOWN
    });
  } else {
    dispatch({
      type: LOGIN_MODAL_SHOWN
    });
  }
};

// Hide LoginSignup Modal
export const hideLoginSignupModal = () => async dispatch => {
  dispatch({
    type: LOGIN_SIGNUP_MODAL_HIDDEN
  });
};
