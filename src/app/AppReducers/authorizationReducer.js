import * as constants from '../constants/Login-form-constants';
import update from 'immutability-helper';

const initialState = {
  authorized: 'default',
  currentAuthorized: '',
  currentRegister: '',
  users: [],
  admin: {
    login: 'myAdmin',
    password: '1111111',
    authorized: false
  },
};


export default (state = initialState, action) => {
  switch (action.type) {

    case constants.DONE:

      const individualUser = state.users.filter(elem => {
        return (
          elem.email === action.payload.email &&
          elem.password === action.payload.password
        )
      });

      return ( individualUser[0] ?

        Object.assign({}, state, {
          authorized: true,
          currentAuthorized: individualUser[0]
        }) :

        Object.assign({}, state, {
          authorized: false,
        })

      );
    break;

    case constants.IS_ADMIN:

      return Object.assign({}, state, {
        currentAuthorized: action.payload,
        admin: {...state.admin,
          authorized: true
        }
      });
    break;

    case constants.LOG_OUT:

      return Object.assign({}, state, {

        authorized: action.payload,
        currentAuthorized: '',
        currentRegister: '',
        admin: { ...state.admin,
            authorized: false,
        }
      });
    break;

    case constants.NEW_USER:

      const byEmailSorting = state.users.filter(elem => elem.email === action.payload.email),
            totalEmail = byEmailSorting.map(elem => elem.email),
            emailProcessed = totalEmail.toString();

      return emailProcessed !== action.payload.email ?

      Object.assign({}, state, {

        users: [...state.users, action.payload],
        userWithEmail: 'Successfully!',
        currentRegister: action.payload

      }) :

      Object.assign({}, state, {

        users: [...state.users],
        userWithEmail: 'This address is already busy!',
        currentRegister: ''

      });
    break;

    case constants.DELETE_USER:

      const sortUsers = state.users.filter(elem => elem.email !== action.payload);

        return Object.assign({}, state, {

          users: sortUsers,
          userWithEmail: 'Successfully!',

        });
    break;

    case constants.CHANGE_USER:

      return update(state, {
        users: {
          [action.payload.id]: {
            name : {
              $set : action.payload.newName
            }
          }
        }
      });
    break;

    default:
      return state
  }
}
