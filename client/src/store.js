import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction'; // Use the npm package to avoid errors on mobile browsers
import rootReducer from './reducers'; // We don't need to specify index.js here as it is the default

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
