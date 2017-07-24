import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import  logger  from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './app/AppReducers/index';

// TEST MIDDLEWARE ping
// import { ping } from './app/middlewares/ping-test-middleware';
// const middleware = applyMiddleware(logger(),ping);
// END TEST MIDDLEWARE ping

const middleware = applyMiddleware(logger());
const store = createStore(rootReducer,composeWithDevTools(middleware));

export default store
