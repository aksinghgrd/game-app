import { ActionTypes } from "../../constant/action-types";
import { categoryReducer } from "../../reducers/categoryReducer";

describe('filter reducer', () => {

    it('should return proper initial state', () => {
        expect(categoryReducer(undefined, {})).toEqual([])
    });

    it('should fetch categories', () => {
        var payload = ["war", "race", "shoot"]
        expect(categoryReducer([], {
            type: ActionTypes.FETCH_CATEGORIES,
            payload: payload,
        })).toEqual(["war", "race", "shoot"]);
    });
});