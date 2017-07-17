import { combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import formReducer from './app/AppReducers/formReducer';

const reducers = combineReducers({
  formReducer
})

export default reducers;
