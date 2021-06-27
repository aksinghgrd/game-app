import { ActionTypes } from "../constant/action-types";

export const setCategoryFilters = (categories) => {
    return {
        type: ActionTypes.SET_CATEGORY_FILTERS,
        payload: categories
    };
}

export const setPlatformFilter = (platform) => {
    return {
        type: ActionTypes.SET_PLATFORM_FILTER,
        payload: platform
    }
}

export const setSortBy = (option) => (dispatch) => {
    dispatch({
        type: ActionTypes.SET_SORT_BY,
        payload: option
    });
}

