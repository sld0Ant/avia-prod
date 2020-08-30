import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer';
import { watchFetchSearch, watchFetchTickets } from '../../saga/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchSearch);
sagaMiddleware.run(watchFetchTickets);
export default store;
