import { GET_CART_ITEMS, CLEAR_CART_ITEM, CLEAR_ALL_CART_ITEMS, CART_FETCH_ERROR } from './types';

// Get all notifications
export const getCartItems = () => async dispatch => {
  try {
    dispatch({ type: CLEAR_ALL_CART_ITEMS });
    // const res = await axios.get('/api/notification');
    const res = [
      {
        productName:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestias dolor velit ea voluptatibus? Mollitia'
      },
      {
        productName:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestias dolor velit ea voluptatibus? Mollitia'
      },
      {
        productName:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestias dolor velit ea voluptatibus? Mollitia'
      }
    ];
    dispatch({
      type: GET_CART_ITEMS,
      payload: res
      // payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CART_FETCH_ERROR
      // payloa{ msg: err.response.statusText, status: err.response.status }
    });
  }
};
