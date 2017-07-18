import * as constants from '../../constants/Login-form-constants';

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

export const done = (currentLogin, currentPassword) => {

  // console.log(currentLogin, 'currentLogin');
  // console.log(currentPassword, 'currentPassword');

  return {

    type: constants.DONE,
    payload: {
      currentLogin,
      currentPassword
    }

  }

}
