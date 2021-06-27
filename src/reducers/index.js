import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { categoryReducer } from "./categoryReducer";
import { filterReducer } from "./filterReducer";
import { searchReducer } from "./searchReducer";

export const reducers = combineReducers({
    games: gameReducer,
    categories: categoryReducer,
    filters: filterReducer,
    search: searchReducer
})