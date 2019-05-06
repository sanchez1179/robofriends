import {CHANGE_SEARCHFIELD} from "./constants";

const initialState = {
    searchField: ''
}

export const searchRobots = (state = intialState, action ={}) => {
    switch(action.type){
        case CHANGE_SEARCHFIELD:
            return {...state, searchField: action.payload};
        default:
            return state;
    }
}