import { ActionTypes } from "../constant/action-types"
import api from "../api/api"
import axios from "axios";

export const fetchGames = () => async (dispatch) => {
    const response = await api.get("/code-challenge/api/games");
    dispatch({ type: ActionTypes.FETCH_GAMES, payload: response.data });
}

export const selectGame = (gameId) => async (dispatch) => {
    const response = await api.get("/code-challenge/api/game?id=" + gameId);
    dispatch({ type: ActionTypes.SELECT_GAME, payload: response.data });
}

export const removeSelectedGame = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_GAME,
    }
}

export const applyFilter = () => async (dispatch, getState) => {
    const filters = getState().filters;
    const query = getQueryString(filters);
    let response;
    try {
        if (getState().filters.categories.length <= 1)
            response = await api.get("/code-challenge/api/games" + query);
        else
            response = await axios.get("/code-challenge/api/filter" + query);
        dispatch({ type: ActionTypes.FETCH_GAMES, payload: response.data });
    } catch (error) {
        dispatch({ type: ActionTypes.FETCH_GAMES_ERROR, payload: error });
    }
}

const getQueryString = (filters) => {
    let obj = {};
    if (filters.categories.length < 2) {
        obj = {
            "platform": filters.platform,
            "category": filters.categories[0] ?? "",
            "sort-by": filters.sortBy
        }
    } else {
        const tags = filters.categories.map((cat) => cat).join('.');
        obj = {
            "tag": tags,
            "platform": filters.platform,
            "sort-by": filters.sortBy
        }
    }
    const query = Object.keys(obj).map(key => { return obj[key] !== "" ? (key + '=' + obj[key]) : "" });
    return "?".concat(query.filter(item => item !== "").join('&'));
}


