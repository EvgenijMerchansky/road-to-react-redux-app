const initialState = {
  login: '',
  password: '',
  doneValue: false,
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LOGIN':
      return Object.assign(state, {login: action.payload});
      break;
    case 'ADD_PASSWORD':
      return Object.assign(state, {password: action.payload});
      break;
    case 'DONE':
      return state.login == '' || state.password == '' ? Object.assign(state, {doneValue: false, error: 'Login or password not valid!'}) : Object.assign(state, {doneValue: true, error: ''});
      break;
    default:
      return state
  }
}
