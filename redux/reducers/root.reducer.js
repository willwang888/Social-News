import { combineReducers } from 'redux';
import test from './test.reducer';
import bookmarks from './bookmarks.reducer';

export default combineReducers({
  test,
  bookmarks,
});
