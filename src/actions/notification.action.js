import {
  GET_NOTIFICATIONS,
  CLEAR_NOTIFICATION,
  CLEAR_ALL_NOTIFICATIONS,
  NOTIFICATIONS_FETCH_ERROR,
  NOTIFICATION_CLEAR_ERROR
} from './types';

// Get all notifications
export const getAllNotifications = () => async dispatch => {
  try {
    dispatch({ type: CLEAR_ALL_NOTIFICATIONS });
    // const res = await axios.get('/api/notification');
    const res = [
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        text:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
      },
      {
        text:
          'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.'
      },
      {
        text:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
        text:
          "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        text:
          "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
      },
      {
        text:
          'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
      },
      {
        text:
          "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
      },
      {
        text:
          'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.'
      },
      {
        text:
          'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.'
      }
    ];
    dispatch({
      type: GET_NOTIFICATIONS,
      payload: res
      // payload: res.data
    });
  } catch (err) {
    dispatch({
      type: NOTIFICATIONS_FETCH_ERROR,
      payload: { msg: 'Error' }
      // payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Clear a notification
export const clearNotification = index => async dispatch => {
  try {
    dispatch({
      type: CLEAR_NOTIFICATION,
      payload: index
    });
  } catch (err) {
    dispatch({
      type: NOTIFICATION_CLEAR_ERROR,
      payload: { msg: 'Error' }
    });
  }
};

// Clear all notifications
export const clearAllNotifications = () => async dispatch => {
  try {
    dispatch({ type: CLEAR_ALL_NOTIFICATIONS });
  } catch (err) {
    dispatch({
      type: NOTIFICATION_CLEAR_ERROR,
      payload: { msg: 'Error' }
    });
  }
};
