import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReducer } from './cashReduser';
import { customReducer } from './customerReduser';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;