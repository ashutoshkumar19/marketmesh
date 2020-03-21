import { combineReducers } from 'redux';
import auth from './auth.reducer';
import modal from './modal.reducer';
import location from './location.reducer';

export default combineReducers({
  auth,
  modal,
  location
});
