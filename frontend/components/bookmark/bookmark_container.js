import { connect } from 'react-redux';
import { createBookmark } from '../../actions/bookmark_actions';
import Bookmark from '../bookmark/bookmark';

const mapStateToProps = ({ event, session }) => ({
  currentUser: session.currentUser || {}
});

const mapDispatchToProps = (dispatch) => ({
  createBookmark: bookmark => dispatch(createBookmark(bookmark))
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);
