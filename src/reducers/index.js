import {combineReducers} from 'redux';
import auth from './auth';
import admin from './admin';
import common from './common';

export default combineReducers({
  auth,
  admin,
  common,
});
