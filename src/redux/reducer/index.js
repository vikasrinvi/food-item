import {LOGIN} from "../constant/actiontypes";

const initialState= {
    login : false
}

const rootReducer = (state = initialState, action) => {
    if (action.type === LOGIN) {
        return Object.assign({}, state, { login : action.payload });
    }
    return state;
}
export default rootReducer;