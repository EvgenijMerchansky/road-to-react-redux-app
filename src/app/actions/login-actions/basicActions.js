import * as constants from '../../constants/Login-form-constants';

export const done = (currentLogin, currentPassword) => {

  return {

    type: constants.DONE,
    payload: {
      currentLogin,
      currentPassword
    }

  }

}

export const currentLogin = (login) => {

  return {

    type: constants.CURRENT_LOGIN,
    payload: login

  }

}

export const currentPassword = (password) => {

  return {

    type: constants.CURRENT_PASSWORD,
    payload: password

  }

}

export const logOut = () => {

  return {

    type: constants.LOG_OUT,
    payload: false

  }

}
