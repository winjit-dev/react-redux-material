import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

// REDUCERS
import reducers from './reducers';

const store = createStore(
    reducers,
    applyMiddleware(promiseMiddleware)
)

//store.subscribe();

export default store;

