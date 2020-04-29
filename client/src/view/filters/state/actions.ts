import * as actionTypes from './actionTypes';
import { service } from './services';

const fetchGenresRequest = () => ({
    type: actionTypes.FETCH_GENRES_REQUEST
});
const fetchGenresSuccess = (genres) => ({
    type: actionTypes.FETCH_GENRES_SUCCESS,
    genres
});
const fetchGenresFailure = (error) => ({
    type: actionTypes.FETCH_GENRES_FAILURE,
    error
});

// thunk
export const fetchGenres = (): Function => {
    return async dispatch => {
        dispatch(fetchGenresRequest())
        try {
            const data = await service.getGenres();
            dispatch(fetchGenresSuccess(data.data));
        } catch(e) {
            dispatch(fetchGenresFailure(e.message));
        }
    }
}