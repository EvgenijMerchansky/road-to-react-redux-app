import * as constants from '../constants/Login-form-constants';

const initialState = {

  authorized: false,
  currentAuthorized: '',
  users: [], // NEW_USER пишет непосредственно в этот массив не ломая стейт вокруг ( наш - authorized: false )
  successfully: '',
  error: '',
  userWithEmail: '',
  admin: {
    login: 'myAdmin',
    password: '1111111',
    authorized: false
  }


}

export default (state = initialState, action) => {
  switch (action.type) {

    case constants.DONE:

      const adminLogin = state.admin.login,
            adminPassword = state.admin.password

      const bulkheadUser = state.users.filter((elem,index) => {
        return elem.email == action.payload.currentLogin && elem.password == action.payload.currentPassword;
      })

      return bulkheadUser[0] ? Object.assign({},state, {

        authorized: true, error: '',
        currentAuthorized: bulkheadUser[0],
        successfully: 'Successfully!'

      }) : Object.assign({},state, {

        authorized: false,
        error: 'Login or password is not valid!',
        currentAuthorized: '',
        successfully: ''

      });

      break;

    case constants.NEW_USER:

      const byEmailSorting = state.users.filter((elem, index) => {
        return elem.email == action.payload.email;
      })

      const totalEmail = byEmailSorting.map((elem,index) => {
        return elem.email;
      })

      const emailСomparison = totalEmail.toString();

      return emailСomparison != action.payload.email ? Object.assign({}, state, {

        users: [...state.users, action.payload],
        userWithEmail: 'Successfully!'

      }) : Object.assign({}, state, {

        users: [...state.users], // Object.assign({}, state, {users: [...state.users, action.payload]}) - записывает в массив стейта не ломая стейт (  authorized: false )
        userWithEmail: 'This address is already busy!'

      });

    default:
      return state
  }
}
