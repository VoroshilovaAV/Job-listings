import {ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER} from './filter-actions'

export const filterReducer = (state = [], action) => {
    switch(action.type){
        case ADD_FILTER: {
            return [...state, action.filter];
        }
        case REMOVE_FILTER: {
            return [...state, action.filter];
        }
        case CLEAR_FILTER: {
            return state.filter(item => item !== action.filter);
        }
        default: {
            return state;
        }
    }
}