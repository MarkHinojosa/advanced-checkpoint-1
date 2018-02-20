
// * myMovieListLoaded(movies)
//     * type = “MY_MOVIE_LIST_LOADED”
//     * value = movies 
export const myMovieListLoaded = (movies) => {
  return {
    type: 'MY_MOVIE_LIST_LOADED',
    value: movies
  }
}

// * loadMyMovieList()
//     * type = “LOAD_MY_MOVIE_LIST”
//     * make fetch call to “/movies”
//     * on complete, dispatch to myMovieListLoaded(movies)
export const loadMyMovieList = () => {
  //     * type = “LOAD_MY_MOVIE_LIST”???????
  return (
    { type: "LOAD_MY_MOVIE_LIST" },
    (dispatch) => {
      fetch('/movies')
        .then((response) => {
          return response.json();
        })
        .then((movies) => {
          return dispatch(myMovieListLoaded(movies));
        })
    })
}

// * searchLoaded(movies)
//     * type = “SEARCH_RESULTS_LOADED”
//     * value = make sure to assign the
//     *  value of movies.results to get the array of movies from movie db
export const searchLoaded = (movies) => {
  console.log(movies)
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies.results
  }
}

// * loadSearch(searchTerm)
//     * type = “LOAD_SEARCH”
//     * make fetch call to 
// https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=yourkey
//     * be sure to put your api key
//     * on complete, dispatch to searchLoaded(movies)
export const loadSearch = (searchTerm) => {
  return ((dispatch) => {
    fetch('https://api.themoviedb.org/3/search/multi?query=' + searchTerm + '&api_key=85b922bc97992276d4000e61445ad213')
      .then((response) => {
        return response.json();
      })
      .then((movies) => {
        return dispatch(searchLoaded(movies));
      });
  })
}

// * saveMyMovie(movie)
//     * make fetch POST to “/movies”
//     * on complete dispatch to loadMyMovieList()
export const saveMyMovie = (movie) => {
  return (
    (dispatch) => {
      fetch('/movies',
        {
          method: 'post',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(movie)
        })
        .then(dispatch(loadMyMovieList(movie)))
    }
  )
}

// * removeMyMovie(id)
//     * make a fetch DELETE to “/movies/” + id
//     * on complete dispatch to loadMyMovieList()
export const removeMyMovie = (id) => {
  return (
    (dispatch) => {
      fetch('/movies/' + id,
        {
          method: 'delete',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify()
        })
        .then(dispatch(loadMyMovieList(id)))
    }
  )
}
