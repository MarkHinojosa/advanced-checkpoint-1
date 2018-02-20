import ListToggle from '../components/ListToggle';
import { saveMyMovie } from '../actions';
import { removeMyMovie } from '../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    saveMyMovie: function (movie) {
      dispatch(saveMyMovie(movie));
    },
    removeMyMovie: function (movie) {
      dispatch(removeMyMovie(movie));
    }
  }
}

export default connect(null, mapDispatchToProps)(ListToggle);