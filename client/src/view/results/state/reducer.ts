import * as actionTypes from './actionTypes';
import { MovieModel } from '../models/MovieModel';

interface MyReducerState {
  data: MovieModel[];
  isFetching: boolean;
  error: boolean;
  errorMessage: string;
  details: any;
}

const initialState: MyReducerState = {
  data: [],
  isFetching: false,
  error: false,
  errorMessage: '',
  details: {
    show: false,
    data: []
  },
}

export const movies = (state: MyReducerState = initialState, action): MyReducerState => {
  switch(action.type) {
    case actionTypes.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.error
      }
    case actionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.movies
      }
    case actionTypes.ACTIVE_DETAIL_MOVIE:
      let movie = state.data.filter(movie => (movie.uuid === action.id))
      return {
        ...state,
        details: {
          show: true,
          data: movie[0]
        },
      };
    case actionTypes.INACTIVE_DETAIL_MOVIE:
      return {
        ...state,
        details: {
          show: false,
          data: []
        },
      };
    default:
      return state;
  }
}
