import { ActionTypes } from "../constant/action-types"

export const setSearchTerm = (text) => {
    return {
        type: ActionTypes.SET_SEARCH_TERM,
        payload: text
    }
}