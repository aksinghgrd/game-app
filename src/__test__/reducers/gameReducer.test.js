import { ActionTypes } from "../../constant/action-types";
import { gameReducer } from "../../reducers/gameReducer";

describe('game reducer', () => {
    const initialState = {
        list: [],
        selectedGame: null,
        error: null
    }

    it('should return proper initial state', () => {
        expect(gameReducer(undefined, {})).toEqual(initialState)
    });

    it('should fetch games', () => {
        var payload = [{ id: 1, title: 'warcraft' }]
        expect(gameReducer(initialState, {
            type: ActionTypes.FETCH_GAMES,
            payload: payload,
        })).toEqual({ list: [{ id: 1, title: 'warcraft' }], selectedGame: null, error: null });
    });

    it('should fetch error', () => {
        var payload = { message: "fetch error" }
        expect(gameReducer(initialState, {
            type: ActionTypes.FETCH_GAMES_ERROR,
            payload: payload,
        })).toEqual({ list: [], selectedGame: null, error: { message: "fetch error" } });
    });

    it('should select game', () => {
        var payload = { id: 1, title: 'warcraft' }
        expect(gameReducer(initialState, {
            type: ActionTypes.SELECT_GAME,
            payload: payload,
        })).toEqual({ list: [], selectedGame: { id: 1, title: 'warcraft' }, error: null });
    });

    it('should remove selected game', () => {
        var state = initialState;
        state.selectedGame = { id: 1, title: 'warcraft' };
        expect(gameReducer(state, {
            type: ActionTypes.REMOVE_SELECTED_GAME,
        })).toEqual({ list: [], selectedGame: null, error: null });
    });

});