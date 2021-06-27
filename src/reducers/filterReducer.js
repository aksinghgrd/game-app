import { ActionTypes } from "../constant/action-types";

const initialState = {
    platform: "",
    categories: [],
    sortBy: "",
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_CATEGORY_FILTERS:
            return { ...state, categories: action.payload }
        case ActionTypes.SET_PLATFORM_FILTER:
            return { ...state, platform: action.payload }
        case ActionTypes.SET_SORT_BY:
            return { ...state, sortBy: action.payload }
        default:
            return state;
    }
}