import { ActionTypes } from "../../constant/action-types";
import { searchReducer } from "../../reducers/searchReducer";

describe('filter reducer', () => {

    const initialState = {
        searchTerm: "",
    }

    it('should return proper initial state', () => {
        expect(searchReducer(undefined, {})).toEqual(initialState)
    });

    it('should set search term', () => {
        var payload = "warcraft"
        expect(searchReducer(initialState, {
            type: ActionTypes.SET_SEARCH_TERM,
            payload: payload,
        })).toEqual({ searchTerm : "warcraft" });
    });
});


