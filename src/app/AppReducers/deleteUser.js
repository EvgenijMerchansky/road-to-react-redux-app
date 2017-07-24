import * as constants from '../constants/Login-form-constants';

import initialState from './autorizationState';

export default (state = initialState, action) => {

    switch (action.type) {

        case constants.DELETE_USER:

            const sortUsers = state.users.filter(elem => elem.email != action.payload);

            return Object.assign({}, state, {

                users: sortUsers,
                userWithEmail: 'Successfully!',

            })

            return state

        break;

        default:

            return state;

        break;

    }

}