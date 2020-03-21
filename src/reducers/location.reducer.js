import { LOCATION_UPDATE_SUCCESS, LOCATION_UPDATE_FAIL } from '../actions/types';

const initialState = {
  location: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOCATION_UPDATE_SUCCESS:
      return {
        ...state,
        location: payload,
        loading: false
      };

    case LOCATION_UPDATE_FAIL:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}
