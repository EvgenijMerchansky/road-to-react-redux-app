import { combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'


// console.log()

import authorizationReducer from './app/AppReducers/authorizationReducer';

const reducers = combineReducers({
  authorizationReducer,
  form: formReducer
})

export default reducers;
