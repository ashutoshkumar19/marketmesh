import {
  GET_CART_ITEMS,
  CLEAR_CART_ITEM,
  CLEAR_ALL_CART_ITEMS,
  CART_FETCH_ERROR
} from '../actions/types';

const initialState = {
  cart: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CART_ITEMS:
      return {
        ...state,
        cart: payload,
        loading: false
      };

    case CLEAR_ALL_CART_ITEMS:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}
