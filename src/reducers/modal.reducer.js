import { LOGIN_MODAL_SHOWN, SIGNUP_MODAL_SHOWN, LOGIN_SIGNUP_MODAL_HIDDEN } from '../actions/types';

const initialState = {
  isModalVisible: false,
  showLoginTab: true,
  showSignupTab: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_MODAL_SHOWN:
      return {
        ...state,
        isModalVisible: true,
        showLoginTab: true,
        showSignupTab: false
      };

    case SIGNUP_MODAL_SHOWN:
      return {
        ...state,
        isModalVisible: true,
        showLoginTab: false,
        showSignupTab: true
      };

    case LOGIN_SIGNUP_MODAL_HIDDEN:
      return {
        ...state,
        isModalVisible: false
      };

    default:
      return state;
  }
}
