import * as constants from '../constants/Login-form-constants';

const initialState = {
  login: '',
  password: '',
  doneValue: false,
  error: '',
  successfully: '',
  newUsers: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_LOGIN:
      return Object.assign({},state, {login: action.payload});
      break;
    case constants.ADD_PASSWORD:
      return Object.assign({},state, {password: action.payload});
      break;
    case constants.DONE:
      return state.login == '' || state.password == '' ? Object.assign({},state, {doneValue: false, error: 'Login or password is not valid!', successfully: ''}) : Object.assign({},state, {doneValue: true, error: '', successfully: 'Successfully!'});
      break;
    case constants.NEW_USER:

      console.log(action.payload, 'from reducer!')

      return state;

    default:
      return state
  }
}
