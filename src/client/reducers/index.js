import { INIT, ADD, DEL } from "../helper/constants";

const users = [];

export const reducer = (state = users, { type, payload }) => {
    console.log("test", payload);
    switch (type) {
        case INIT:
            return [...state, ...payload];
        case ADD:
            return [...state, { ...payload }];
        case DEL:
            return [...state.slice(0, payload), ...state.slice(payload + 1)];
        default:
            return state;
    }
}