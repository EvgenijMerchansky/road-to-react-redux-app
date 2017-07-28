import { combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import authorizationReducer from './authorizationReducer';

const rootReducer = combineReducers({
    authorizationReducer,
    form: formReducer
});

export default rootReducer;