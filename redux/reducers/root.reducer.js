import { combineReducers } from 'redux';
import test from './test.reducer';
import user from './user.reducer';
import bookmarks from './bookmarks.reducer';

export default combineReducers({
  test,
  bookmarks,
  user,
});
