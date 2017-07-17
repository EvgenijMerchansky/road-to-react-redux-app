export const addLogin = (value) => {

  return {
    type: 'ADD_LOGIN',
    payload: value
  }

}

export const addPassword = (password) => {

  return {
    type: 'ADD_PASSWORD',
    payload: password
  }

}

export const done = () => {

  return {
    type: 'DONE',
    payload: 'done'
  }

}
