import * as React from 'react';
import { connect } from 'react-redux';
import { ResultList } from '../../components/ResultsList';
import { MovieModel } from '../../models/movieModel';
import { fetchMovies, activeDetailMovie, inactiveDetailMovie } from '../../state/actions';
import { getTotalMovies, getMovies } from '../../state/selectors';

interface Props {
    dataMovies: MovieModel[];
    isFetching: boolean;
    error: boolean;
    fetchMovies?: Function;
    activeDetailMovie: Function;
    inactiveDetailMovie: Function;
    details: any;
    totalMovies: number;
}

interface State {}

class Container extends React.Component<Props, State> {
    state = {

    }
    componentDidMount() {
        this.props.fetchMovies();
    }

    render(): JSX.Element {
        const {
            dataMovies,
            isFetching,
            error,
            activeDetailMovie,
            details,
            inactiveDetailMovie,
            totalMovies
        } = this.props;
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
        return (<ResultList
            list={dataMovies}
            activeDetailMovie={activeDetailMovie}
            totalMovies={totalMovies}
        />)
    }
}

const mapStateToProps = (state) => {
    return ({
        dataMovies: getMovies(state.movies.data, state.genres.filterBy),
        totalMovies: getTotalMovies(state.movies.data),
        isFetching: state.movies.isFetching,
        details: state.movies.details,
        error: state.movies.error,
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
