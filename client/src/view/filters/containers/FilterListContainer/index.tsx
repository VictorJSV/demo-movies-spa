import * as React from 'react';
import { connect } from 'react-redux';
import { FilterList } from '../../components/FilterList';
import { GenreModel } from '../../models/genresModel';
import { fetchGenres, showMoviesByFilter } from '../../state/actions';

interface Props {
  genresData: GenreModel[];
  isFetching: boolean;
  error: boolean;
  fetchGenres: Function;
  showMoviesByFilter: Function;
}

interface State {}

class Container extends React.Component<Props, State> {
  state = {}
  componentDidMount() {
    this.props.fetchGenres();
  }
  render(): JSX.Element {
    const { genresData, isFetching, error, showMoviesByFilter } = this.props;
    if (isFetching) {
      return <span>Cargando ...</span>
    }
    if (error) {
      return <span>Falló</span>
    }
    return (<FilterList list={genresData} showMoviesByFilter={showMoviesByFilter}/>)
  }
}

const mapStateToProps = (state) => {
    return ({
        genresData: state.genres.data,
        isFetching: state.genres.isFetching,
        details: state.genres.details,
        error: state.genres.error
    })
};

const mapDispatchToProps = dispatch => ({
    fetchGenres: () => dispatch(fetchGenres()),
    showMoviesByFilter: (idFilter) => dispatch(showMoviesByFilter(idFilter)),
});

export const FilterListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
