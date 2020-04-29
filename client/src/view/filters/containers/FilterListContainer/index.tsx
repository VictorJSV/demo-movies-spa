import * as React from 'react';
import { connect } from 'react-redux';
import { FilterList } from '../../components/FilterList';
import { GenreModel } from '../../models/genresModel';
import { fetchGenres } from '../../state/actions';

interface Props {
    genresData: GenreModel[];
    isFetching: boolean;
    error: boolean;
    fetchGenres?: Function;
}

interface State {}

class Container extends React.Component<Props, State> {
    state = {}
    componentDidMount() {
        this.props.fetchGenres();
    }
    render(): JSX.Element {
        const { genresData, isFetching, error } = this.props;
        if (isFetching) {
            return <span>Cargando ...</span>
        }
        if (error) {
            return <span>Falló</span>
        }
        return (<FilterList list={genresData}/>)
    }
}

const mapStateToProps = (state) => {
    console.log('state>>>', state)
    return ({
        genresData: state.genres.data,
        isFetching: state.genres.isFetching,
        details: state.genres.details,
        error: state.genres.error
    })
};

const mapDispatchToProps = dispatch => ({
    fetchGenres: () => dispatch(fetchGenres()),
});

export const FilterListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)