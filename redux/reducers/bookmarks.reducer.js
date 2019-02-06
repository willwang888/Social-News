import Types from '../actions/index.actions';

const bookmarks = (state = [], action) => {
  switch (action.type) {
  case Types.UPLOAD_BOOKMARK:
  	return [...state, action.bookmark]
  default:
    return state;
  }
};

export default bookmarks;