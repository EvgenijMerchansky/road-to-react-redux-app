import * as constants from '../constants/Login-form-constants';

const initialState = {

  authorized: false,
  currentAuthorized: '',
  users: [], // NEW_USER пишет непосредственно в этот массив не ломая стейт вокруг ( наш - authorized: false )
  successfully: '',
  error: ''

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

      const bulkheadUser = state.users.filter((elem,index) => {
        return elem.username == action.payload.currentLogin && elem.password == action.payload.currentPassword;
      })
      return bulkheadUser[0] ? Object.assign({},state, {authorized: true, error: '', currentAuthorized: bulkheadUser[0], successfully: 'Successfully!'}) : Object.assign({},state, {authorized: false, error: 'Login or password is not valid!', currentAuthorized: '', successfully: ''});
      break;

    case constants.NEW_USER:

      return action.payload != null ? Object.assign({}, state, {users: [...state.users, action.payload]}) : state; // Object.assign({}, state, {users: [...state.users, action.payload]}) - записывает в массив стейта не ломая стейт (  authorized: false )

    default:
      return state
  }
}
