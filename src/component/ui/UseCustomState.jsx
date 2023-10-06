// 사용안함
import { useReducer } from 'react';

const initialState = {
    activeIndex: 0,
    activeOn: 0,
    selectActive: 0,
    toggle: false,
    selectedComponent: "",
    show: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE':
            return { ...state, ...action.payload };
        case 'TOGGLE':
            return { ...state, toggle: !state.toggle };
        default:
            return state;
    }
}

const UseCustomState = () => {
    return useReducer(reducer, initialState);  
}

export default UseCustomState;