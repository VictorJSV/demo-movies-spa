import * as React from 'react';
import { connect } from 'react-redux';
import { ResultList } from '../../components/ResultsList';
import { MovieModel } from '../../models/movieModel';
import { fetchMovies, activeDetailMovie, inactiveDetailMovie } from '../../state/actions';

interface Props {
    movieData: MovieModel[];
    isFetching: boolean;
    error: boolean;
    fetchMovies?: Function;
    activeDetailMovie: Function;
    inactiveDetailMovie: Function;
    details: any;
}

interface State {}

class Container extends React.Component<Props, State> {
    state = {

    }
    componentDidMount() {
        this.props.fetchMovies();
    }

    render(): JSX.Element {
        const { movieData, isFetching, error, activeDetailMovie, details, inactiveDetailMovie } = this.props;
        if (isFetching) {
            return <span>Cargando ...</span>
        }
        if (error) {
            return <span>Falló</span>
        }
        if (details.show) {
            return <div>
                <h2>{details.data.title}</h2>
                <p>{details.data.detail}</p>
                <button onClick={() => inactiveDetailMovie()}>Regresar</button>
            </div>
        }
        return (<ResultList list={movieData} activeDetailMovie={activeDetailMovie}/>)
    }
}

const mapStateToProps = (state) => {
    return ({
        movieData: state.movies.data,
        isFetching: state.movies.isFetching,
        details: state.movies.details,
        error: state.movies.error
    })
};

const mapDispatchToProps = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    activeDetailMovie: (id) => dispatch(activeDetailMovie(id)),
    inactiveDetailMovie: () => dispatch(inactiveDetailMovie())
});

export const ResultListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)