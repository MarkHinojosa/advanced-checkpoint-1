// ### SearchBoxContainer.js
//   * import SearchBox
// * import action `loadSearch`
//   * mapDispatchToProps for this action
// // * Determine which props to map to based on the props 
// that are already coded into the SearchBox component
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import { loadSearch } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    loadSearch: function (searchTerm) {
      dispatch(loadSearch(searchTerm));
    }
  };
}

export default connect(null, mapDispatchToProps)(SearchBox);
