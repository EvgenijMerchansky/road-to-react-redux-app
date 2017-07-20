import * as constants from '../constants/Login-form-constants';

const initialState = {
  authorized: false,
  authorizedLogin: false,
  authorizedPassword: false,
  currentAuthorized: '',
  users: [], // NEW_USER пишет непосредственно в этот массив не ломая стейт вокруг ( наш - authorized: false )
  successfully: '',
  error: '',
  userWithEmail: '',
  admin: {
    login: 'myAdmin',
    password: '1111111',
    authorized: false
  },
  currentLogin: '',
  currentPassword: ''
}

export default (state = initialState, action) => {
  switch (action.type) {


    case constants.CURRENT_LOGIN:
      const validationForLogin = state.users.filter((elem) => { return elem.email == action.payload}),
            processedForLogin = validationForLogin.map((elem) => { return elem.email }),
            totalLogin = processedForLogin.toString();

      return Object.assign({}, state, {
        currentLogin: action.payload,
        authorizedLogin: totalLogin ? true : false
      });
    break;


    case constants.CURRENT_PASSWORD:
      const validationForPassword = state.users.filter((elem) => { return elem.password == action.payload}),
            processedForPassword = validationForPassword.map((elem) => { return elem.password }),
            totalPassword = processedForPassword.toString();

      return Object.assign({}, state, {
        currentPassword: action.payload,
        authorizedPassword: totalPassword ? true : false
      });
    break;


    case constants.DONE:
      const bulkheadUser = state.users.filter((elem) => { return elem.email == action.payload.currentLogin && elem.password == action.payload.currentPassword })

      return bulkheadUser[0] || action.payload.currentLogin == state.admin.login && action.payload.currentPassword == state.admin.password ?
        Object.assign({},state, {
        authorized: state.authorizedLogin && state.authorizedPassword,
        error: '',
        currentAuthorized: action.payload.currentLogin == state.admin.login && action.payload.currentPassword == state.admin.password ? state.admin : '',
        successfully: state.authorizedLogin != false && state.authorizedPassword != false ? 'Successfully!' : '',
        admin: {
          login: state.admin.login,
          password: state.admin.password,
          authorized: action.payload.currentLogin == state.admin.login && action.payload.currentPassword == state.admin.password ? true : null
        }
      })
      : Object.assign({},state, {
        authorized: false,
        error: 'Login or password is not valid!',
        currentAuthorized: '',
        successfully: '',
        admin: {
          login: state.admin.login,
          password: state.admin.password,
          authorized: action.payload.currentLogin != state.admin.login && action.payload.currentPassword != state.admin.password ? false : null
        },
      });

    break;


    case constants.LOG_OUT:
      return Object.assign({}, state, {
        authorized: action.payload,
        authorizedLogin: action.payload,
        authorizedPassword: action.payload,
        successfully: 'Login or password is not valid!',
        currentAuthorized: ''
      });
    break;


    case constants.NEW_USER:
      const byEmailSorting = state.users.filter((elem) => {return elem.email == action.payload.email}),
            totalEmail = byEmailSorting.map((elem) => {return elem.email}),
            emailСomparison = totalEmail.toString();

      return emailСomparison != action.payload.email ? Object.assign({}, state, {

        users: [...state.users, action.payload],
        userWithEmail: 'Successfully!'

      }) : Object.assign({}, state, {

        users: [...state.users], // Object.assign({}, state, {users: [...state.users, action.payload]}) - записывает в массив стейта не ломая стейт (  authorized: false )
        userWithEmail: 'This address is already busy!'

      });
    break;


    default:
      return state
  }
}
