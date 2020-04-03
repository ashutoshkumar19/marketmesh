import { combineReducers } from 'redux';
import auth from './auth.reducer';
import modal from './modal.reducer';
import location from './location.reducer';
import cart from './cart.reducer';
import notification from './notification.reducer';

export default combineReducers({
  auth,
  modal,
  location,
  cart,
  notification
});
