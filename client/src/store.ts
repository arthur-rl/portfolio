import {createStore, combineReducers} from 'redux';

const initialState = {
    authState: {
        logged_in: false,
        username: ""
    }
}

const reducer = (store = initialState, action: any) => {
    switch(action.type) {
        case "SET_AUTH_STATE":
            return {
                ...store,
                authState: action.state
            }
        default:
            return store
    } 
}

export default createStore(reducer);