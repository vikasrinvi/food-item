import {LOGIN} from "../constant/actiontypes";

export function login(payload) {
    return {
        type : LOGIN,
        payload
    };
}
