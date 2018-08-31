import { createStore, applyMiddleware, compose } from 'redux';
import thunk                                     from 'redux-thunk';
import rootReducer                               from './reducers';

const initialState = {};

const middleware = [ thunk ];

// Reducer, preloaded state, enhancer(middleware)
// Add the chrome extension redux devtools middleware here
const store = createStore (
    rootReducer,
    initialState,
    compose ( applyMiddleware ( ...middleware ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ () ) );

export default store;