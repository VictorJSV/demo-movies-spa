import * as actionTypes from './actionTypes';
import { serviceMovies } from './services';

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
            const data = await serviceMovies.getMovies();
            const ResultList = [
                {
                  uuid: 1,
                  imageSrc: 'https://picsum.photos/200/300',
                  title: 'Bad Boys para siempre',
                  detail: 'Los policías de la vieja escuela Mike Lowery y Marcus Burnett vuelven a patrullar juntos para derrotar al líder vicioso de un cartel de drogas de Miami. El recién creado equipo de élite AMMO del departamento de policía de Miami junto con Mike y Marcus se enfrentan al despiadado Armando Armas.'
                },
                {
                  uuid: 2,
                  imageSrc: 'https://picsum.photos/200/300',
                  title: 'Sonic la película',
                  detail: 'Sonic intenta navegar por las complejidades de la vida en la Tierra con su nuevo mejor amigo, un humano llamado Tom Wachowski. Pronto deben unir fuerzas para evitar que el malvado Dr. Robotnik capture a Sonic y use sus poderes para dominar el mundo.'
                },
                {
                  uuid: 3,
                  imageSrc: 'https://picsum.photos/200/300',
                  title: 'Parásitos',
                  detail: 'Tanto Gi Taek como su familia están sin trabajo. Cuando su hijo mayor, Gi Woo, empieza a impartir clases particulares en la adinerada casa de los Park, las dos familias, que tienen mucho en común pese a pertenecer a dos mundos totalmente distintos, entablan una relación de resultados imprevisibles.'
                }
              ];
              dispatch(fetchMoviesSuccess(ResultList));
        } catch(e) {
            dispatch(fetchMoviesFailure(e.message));
        }
    }
}