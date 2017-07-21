import * as constants from '../../constants/Login-form-constants';

export const done = (email, password) => {

  if(email == 'myAdmin' && password == '1111111'){

    return {

      type: constants.IS_ADMIN,
      payload: {
        email,
        password,
      }

    }

  }else{

    return {

      type: constants.DONE,
      payload: {
        email,
        password,
      }

    }

  }

}

export const logOut = () => {

  return {

    type: constants.LOG_OUT,
    payload: 'default'

  }

}
