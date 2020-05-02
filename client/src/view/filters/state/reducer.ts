import * as actionTypes from './actionTypes';
import { GenreModel } from '../models/genresModel';

interface MyReducerState {
  data: GenreModel[];
  isFetching: boolean;
  error: boolean;
  errorMessage: string;
  filterBy: string;
}

const initialState: MyReducerState = {
  data: [],
  isFetching: false,
  error: false,
  errorMessage: '',
  filterBy: '',
}

export const genres = (state: MyReducerState = initialState, action): MyReducerState => {
  switch(action.type) {
    case actionTypes.FETCH_GENRES_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.FETCH_GENRES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.error
      }
    case actionTypes.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.genres
      }
    case actionTypes.SHOW_MOVIES_BY_FILTER:
      return {
        ...state,
        filterBy: action.id
      }
      case actionTypes.HIDE_MOVIES_BY_FILTER:
        console.log('state', state)
        return {
          ...state,
          filterBy: ''
        }
    default:
      return state;
  }
}
