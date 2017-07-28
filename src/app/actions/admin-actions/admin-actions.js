import * as constants from '../../constants/Login-form-constants';

export const deleteUser = (user) => {

  return {

    type: constants.DELETE_USER,
    payload: user.email

  }

};

export const changeUser = (newName, id) => {

  return {

    type: constants.CHANGE_USER,
    payload: {newName, id},

    }
};
