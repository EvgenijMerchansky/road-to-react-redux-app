import * as constants from '../constants/Login-form-constants';import initialState from './autorizationState';console.log(initialState);export default (state = initialState, action) => {    switch (action.type) {        default:            return state;        break;    }}