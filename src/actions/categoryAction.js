import { ActionTypes } from "../constant/action-types"
import axios from "axios";

export const fetchCategories = () => async (dispatch) => {
    try {
        const response = await axios.get("/code-challenge/api/categories");
        dispatch({ type: ActionTypes.FETCH_CATEGORIES, payload: response.data });
    } catch (error) {
        dispatch({ type: ActionTypes.FETCH_CATEGORIES_FAILURE, payload: error });
    }
}


