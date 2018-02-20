import App from '../App';
import { loadMyMovieList } from '../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    loadMyMovieList: function () {
      dispatch(loadMyMovieList());
    }
  };
}

const mapStateToProps = (state) => {
  return ({
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  }
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(App);