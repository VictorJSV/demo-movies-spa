import * as actionTypes from './actionTypes';
import { GenreModel } from '../models/genresModel'; 

interface MyReducerState {
  data: GenreModel[];
  isFetching: boolean;
  error: boolean;
  errorMessage: string;
}

const initialState: MyReducerState = {
  data: [],
  isFetching: false,
  error: false,
  errorMessage: '',
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
    default:
      return state;
  }
}