import { ActionTypes } from "../constant/action-types"

export const categoryReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.FETCH_CATEGORIES:
            return [...action.payload];
        default:
            return state;
    }
}