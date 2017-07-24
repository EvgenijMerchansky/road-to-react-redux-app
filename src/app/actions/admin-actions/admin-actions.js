import * as constants from '../../constants/Login-form-constants';

export const deleteUser = (user) => {

  // console.log(user)

  return {

    type: constants.DELETE_USER,
    payload: user.email

  }

}

export const changeUser = (newName, id) => {
    // console.log(user, newName, 'log');
    // console.log(userName,newName,'changeUser')

  return {
    type: constants.CHANGE_USER,
    payload: {newName, id},
    //payload: Object.assign(user, {name: newName})
      // userName: userName,
      // newName: newName
    }
};
