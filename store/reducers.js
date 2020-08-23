import { initialState } from './initialState';
import { changeLoaderState, setTravellerList, handleError, setSelectedTraveller } from './actions';

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'FETCH_TRAVELLER_LIST':
            return changeLoaderState(state, { payload: true });
        case 'FETCH_TRAVELLER_LIST_SUCCESS':
            return setTravellerList(state, action);
        case 'FETCH_TRAVELLER_LIST_FAILURE':
            return handleError(state, action);
        case 'CHANGE_LOADER_STATE':
            return changeLoaderState(state, action);
        case 'SET_SELECTED_TRAVELLER':
            return setSelectedTraveller(state, action);
        default: return state
    }
}