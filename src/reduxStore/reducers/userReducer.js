import { GET_ALL_USER, GET_MATCHED_USER, LIKE, DISLIKE } from '../actions/userAction';

const initialState = {
    users: [],
    matchedUsers: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_USER:
            return {
                ...state,
                users: action.payload
            };
        case GET_MATCHED_USER:
            return {
                ...state,
                matchedUsers: action.payload
            };
    }

    return state;
}