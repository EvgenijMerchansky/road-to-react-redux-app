import * as constants from '../constants/Login-form-constants';

import initialState from './autorizationState';

export default (state = initialState, action) => {

    console.log(state);

    switch (action.type) {

        case constants.LOG_OUT:

            console.log(action.payload,'action.payload')

            return Object.assign({}, state, {

                authorized: action.payload,
                currentAuthorized: '',
                admin: { ...state.admin,
                    authorized: false

                }
            });

        break;

        default:

            return state;

        break;

    }

}