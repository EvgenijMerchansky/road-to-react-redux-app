import * as constants from '../../constants/Login-form-constants';

export const getUserValues = (UserObject) => {

  return {

    type: constants.NEW_USER,
    payload: UserObject

  }

}
