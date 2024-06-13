import authReducer from './authReducer';
import companyReducer from './companyReducer';
import { combineReducers } from 'redux';

//---------used predefined redux combined reducers--------
export default combineReducers({
  authReducer,
  companyReducer
});



