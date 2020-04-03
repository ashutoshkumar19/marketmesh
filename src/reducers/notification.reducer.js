import {
  GET_NOTIFICATIONS,
  CLEAR_NOTIFICATION,
  CLEAR_ALL_NOTIFICATIONS,
  NOTIFICATIONS_FETCH_ERROR,
  NOTIFICATION_CLEAR_ERROR
} from '../actions/types';

const initialState = {
  notification: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NOTIFICATIONS:
      return {
        ...state,
        notification: payload,
        loading: false
      };

    case CLEAR_NOTIFICATION:
      return {
        ...state,
        notification: state.notification.filter((item, index) => index !== payload),
        loading: false
      };

    case CLEAR_ALL_NOTIFICATIONS:
      return {
        ...state,
        notification: [],
        loading: false
      };

    case NOTIFICATIONS_FETCH_ERROR:
    case NOTIFICATION_CLEAR_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    default:
      return state;
  }
}
