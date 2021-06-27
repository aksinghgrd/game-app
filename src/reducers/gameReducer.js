import { ActionTypes } from "../constant/action-types"

const initialState = {
    list: [],
    selectedGame: null,
    error: null
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_GAMES:
            return { ...state, list: action.payload }
        case ActionTypes.FETCH_GAMES_ERROR:
            return { ...state, error: action.payload }
        case ActionTypes.SELECT_GAME:
            return { ...state, selectedGame: action.payload }
        case ActionTypes.REMOVE_SELECTED_GAME:
            return { ...state, selectedGame: null }
        default:
            return state;
    }
}
