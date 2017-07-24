import * as constants from '../constants/Login-form-constants';

import initialState from './autorizationState';

export default (state = initialState, action) => {

    switch (action.type) {

        case constants.CHANGE_USER:

            return update(state, {
                users: {
                    [action.payload.id]: {
                        name : {
                            $set : action.payload.newName
                        }
                    }
                }
            });

        break;

        default:

            return state;

        break;

    }

}