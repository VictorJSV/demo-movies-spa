import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { movies } from '../view/results/state/reducer';
import { genres } from '../view/filters/state/reducer';


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            movies,
            genres
        }),
        composeEnhancers(
            applyMiddleware(
                thunk,
            ),
        )
    );
    return store;
}
