import {createStore, combineReducers, applyMiddleware } from 'redux';
import { News } from './news';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            news: News
        }),
applyMiddleware(thunk, logger)
    );

    return store;
}
