// Libraries
import { connect } from 'react-redux';

// Actions and Components
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';
import Bookmark from './bookmark';
import { requestAllEvents } from '../../actions/event_actions';

const mapStateToProps = ({ event, session }) => ({
  currentUser: session.currentUser || {bookmarks: []},
});

const mapDispatchToProps = (dispatch) => ({
  requestAllEvents: () => dispatch(requestAllEvents()),
  createBookmark: event => dispatch(createBookmark(event)),
  deleteBookmark: event_id => dispatch(deleteBookmark(event_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);
