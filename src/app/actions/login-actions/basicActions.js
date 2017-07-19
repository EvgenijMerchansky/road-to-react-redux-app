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
