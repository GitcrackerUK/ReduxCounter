// import { combinedReducers } from 'redux';
// import someReducer from './someReducer'

const initialState = {};

export default function reducer(state = initialState, actions) {
    return {
        ...state,
        counter: 42,
    };
}
