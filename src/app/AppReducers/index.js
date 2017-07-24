import { combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import authorizationReducer from './authorizationReducer';
// import registrationUser from "./registrationUser";
// import registerLogIn from './registerLogIn';
// import logOut from './logOut';
// import admin from './admin';
// import changeUser from './changeUser';
// import deleteUser from './deleteUser';

const rootReducer = combineReducers({
    authorizationReducer,
    // registrationUser,
    // registerLogIn,
    // logOut,
    // admin,
    // changeUser,
    // deleteUser,
    form: formReducer
})

export default rootReducer;