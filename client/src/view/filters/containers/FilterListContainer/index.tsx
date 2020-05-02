import * as React from 'react';
import { connect } from 'react-redux';
import { FilterList } from '../../components/FilterList';
import { AllFilters } from '../../components/AllFilters';
import { GenreModel } from '../../models/genresModel';
import { fetchGenres, showMoviesByFilter, hideMoviesByFilter } from '../../state/actions';

interface Props {
  genresData: GenreModel[];
  isFetching: boolean;
  error: boolean;
  filterBy: string;
  fetchGenres: Function;
  showMoviesByFilter: Function;
  hideMoviesByFilter: Function;
}

interface State {}

class Container extends React.Component<Props, State> {
  state = {}
  componentDidMount() {
    this.props.fetchGenres();
  }
  render(): JSX.Element {
    const {
      genresData,
      isFetching,
      error,
      filterBy,
      showMoviesByFilter,
      hideMoviesByFilter
    } = this.props;
    (isFetching) ? <span>Cargando ...</span> : null;
    (error) ? <span>Falló</span> : null;
    return (
      <>
        { (filterBy != '') ? (<AllFilters hideMoviesByFilter={hideMoviesByFilter}/>) : null }
        <FilterList list={genresData} showMoviesByFilter={showMoviesByFilter}/>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    genresData: state.genres.data,
    isFetching: state.genres.isFetching,
    details: state.genres.details,
    error: state.genres.error,
    filterBy: state.genres.filterBy,
  })
};

const mapDispatchToProps = dispatch => ({
  fetchGenres: () => dispatch(fetchGenres()),
  showMoviesByFilter: (idFilter) => dispatch(showMoviesByFilter(idFilter)),
  hideMoviesByFilter: () => dispatch(hideMoviesByFilter()),
});

export const FilterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
