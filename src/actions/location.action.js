import { LOCATION_UPDATE_SUCCESS, LOCATION_UPDATE_FAIL } from './types';

// Update Location
export const updateLocation = pincode => async dispatch => {
  if (pincode) {
    console.log(pincode + ' Received');
    dispatch({
      type: LOCATION_UPDATE_SUCCESS,
      payload: pincode
    });
  } else {
    dispatch({
      type: LOCATION_UPDATE_FAIL
    });
  }
};
