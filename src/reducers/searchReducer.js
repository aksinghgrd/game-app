import { ActionTypes } from "../constant/action-types";

const initialState = {
    searchTerm: "",
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_SEARCH_TERM:
            return { ...state, searchTerm: action.payload }
        default:
            return state;
    }
}