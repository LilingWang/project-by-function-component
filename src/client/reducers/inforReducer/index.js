import { GETINFO } from "../../helper/constants";

const info = []
export const infoReducer = (state = info, { type, payload }) => {
    console.log("test info", payload);
    switch (type) {
        case GETINFO:
            return [...state, {...payload}];
       
        default:
            return state;
    }
}