import { ActionTypes } from "../../constant/action-types";
import { filterReducer } from "../../reducers/filterReducer";

describe('filter reducer', () => {

    const initialState = {
        platform: "",
        categories: [],
        sortBy: "",
    }

    it('should return proper initial state', () => {
        expect(filterReducer(undefined, {})).toEqual(initialState)
    });

    it('should set platform filter', () => {
        var payload = "browser"
        expect(filterReducer(initialState, {
            type: ActionTypes.SET_PLATFORM_FILTER,
            payload: payload,
        })).toEqual({ platform: "browser", categories: [], sortBy: "" });
    });

    it('should set category filter', () => {
        var payload = ["war", "shoot"];
        expect(filterReducer(initialState, {
            type: ActionTypes.SET_CATEGORY_FILTERS,
            payload: payload,
        })).toEqual({ platform: "", categories: ["war", "shoot"], sortBy: "" });
    });

    it('should set sort by', () => {
        var payload = "alphabetical"
        expect(filterReducer(initialState, {
            type: ActionTypes.SET_SORT_BY,
            payload: payload,
        })).toEqual({ platform: "", categories: [], sortBy: "alphabetical" });
    });

});