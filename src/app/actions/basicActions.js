import * as constants from '../constants/Login-form-constants';

export const addLogin = (value) => {

  return {
    type: constants.ADD_LOGIN,
    payload: value
  }

}

export const addPassword = (password) => {

  return {
    type: constants.ADD_PASSWORD,
    payload: password
  }

}

export const done = () => {

  return {
    type: constants.DONE,
    payload: 'done'
  }

}
