import * as constants from '../../constants/Login-form-constants';

export const getUserValues = (UserObject) => {

  console.log(UserObject,'from action')

  return {

    type: constants.NEW_USER,
    payload: UserObject

  }

}
