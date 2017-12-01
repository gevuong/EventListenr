// Libraries
import { connect } from 'react-redux';

// Actions and Components
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';
import Bookmark from './bookmark';

// how does container have access to session and event again?
const mapStateToProps = ({ event, session }) => ({
  currentUser: session.currentUser || {bookmarks: []},
});

const mapDispatchToProps = (dispatch) => ({
  createBookmark: event => dispatch(createBookmark(event)),
  deleteBookmark: event_id => dispatch(deleteBookmark(event_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);
