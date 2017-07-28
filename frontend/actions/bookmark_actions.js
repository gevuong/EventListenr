import * as BookmarkAPIUtil from '../util/bookmark_api_util';
import { receiveCurrentUser } from './session_actions';
export const RECEIVE_ALL_BOOKMARKS = "RECEIVE_ALL_BOOKMARKS";
export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";

// sync actions
export const receiveAllBookmarks = bookmarks => ({
  type: RECEIVE_ALL_BOOKMARKS,
  bookmarks
});

export const receiveBookmark = bookmark => ({
  type: RECEIVE_BOOKMARK,
  bookmark
});


// async thunk actions
export const requestBookmark = id => dispatch => (
  BookmarkAPIUtil.fetchBookmark(id).then(bookmark =>  (dispatch(receiveBookmark(bookmark))
  )
)
);

export const createBookmark = bookmark => dispatch => (
  BookmarkAPIUtil.createBookmark(bookmark).then(user => (
    dispatch(receiveCurrentUser(user))
)
)
);
