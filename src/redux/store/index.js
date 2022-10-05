import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import fetchDataReducer from '../fetchData/reducers';

const testApp = combineReducers({
    data: fetchDataReducer
});

const rootReducer = combineReducers({ testApp: testApp });

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
