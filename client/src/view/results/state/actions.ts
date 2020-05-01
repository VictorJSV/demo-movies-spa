import * as actionTypes from './actionTypes';
import { service } from './services';

const fetchMoviesRequest = () => ({
  type: actionTypes.FETCH_MOVIES_REQUEST
});

const fetchMoviesSuccess = (movies) => ({
  type: actionTypes.FETCH_MOVIES_SUCCESS,
  movies
});

const fetchMoviesFailure = (error) => ({
  type: actionTypes.FETCH_MOVIES_FAILURE,
  error
});

export const activeDetailMovie = (id) => ({
  type: actionTypes.ACTIVE_DETAIL_MOVIE,
  id
})

export const inactiveDetailMovie = () => ({
  type: actionTypes.INACTIVE_DETAIL_MOVIE
})

// thunk
export const fetchMovies = (): Function => {
  return async dispatch => {
    dispatch(fetchMoviesRequest())
    try {
      const data = await service.getMovies();
      dispatch(fetchMoviesSuccess(data.data));
    } catch(e) {
      dispatch(fetchMoviesFailure(e.message));
    }
  }
}
