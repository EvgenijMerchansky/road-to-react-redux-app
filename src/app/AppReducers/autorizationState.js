const initialState = {
    authorized: 'default',
    currentAuthorized: '',
    users: [], // NEW_USER пишет непосредственно в этот массив не ломая стейт вокруг ( наш - authorized: false )
    admin: {
        login: 'myAdmin',
        password: '1111111',
        authorized: false
    },
}

export default initialState;