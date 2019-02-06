import Types from '../actions/index.actions';


export function addBookmark(bookmarkObj) {
  return {
    type: Types.UPLOAD_BOOKMARK,
    bookmark: bookmarkObj,
  }
}