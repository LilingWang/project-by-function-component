import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer} from '../reducers/index';
import {infoReducer} from '../reducers/inforReducer/index';

const rootReducer = combineReducers({
    reducer,
    infoReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));