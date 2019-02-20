import Types from './index.actions';


export function addBookmark(bookmarkObj) {
  return {
    type: Types.UPLOAD_BOOKMARK,
    bookmark: bookmarkObj,
  };
}
