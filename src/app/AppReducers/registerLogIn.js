import * as constants from '../constants/Login-form-constants';

import initialState from './autorizationState';

export default (state = initialState, action) => {

    switch (action.type) {

        case constants.NEW_USER:

            const byEmailSorting = state.users.filter(elem => elem.email === action.payload.email); // более лаконичный синтаксис записи вместо .filter((elem) => {return elem.email === action.payload.email}) если в фвп - один аргумент скобки не нужны
            const totalEmail = byEmailSorting.map(elem => elem.email);
            const emailProcessed = totalEmail.toString();

            return emailProcessed !== action.payload.email ?

                Object.assign({}, state, {

                    users: [...state.users, action.payload],
                    userWithEmail: 'Successfully!',

                }) :

                Object.assign({}, state, {

                    users: [...state.users], // Object.assign({}, state, {users: [...state.users, action.payload]}) - записывает в массив стейта не ломая стейт (  authorized: false )
                    userWithEmail: 'This address is already busy!',

                });

        break;

        case constants.DONE:

            console.log(action.payload,'with login');

            const individualUser = state.users.filter(elem => {

                return (
                    elem.email === action.payload.email &&
                    elem.password === action.payload.password
                )
            });

            console.log(individualUser);

            return ( individualUser[0] ?

                    Object.assign({}, state, {
                        authorized: true,
                        currentAuthorized: individualUser[0]
                    }) :

                    Object.assign({}, state, {
                        authorized: false,
                    })

            );

        break;

        case constants.IS_ADMIN:

            return Object.assign({}, state, {
                currentAuthorized: action.payload,
                admin: {
                    ...state.admin,
                    authorized: true
                }
            })

        break;

        default:

            return state;

        break;

    }

}