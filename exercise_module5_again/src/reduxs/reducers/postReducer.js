import {GET_ALL_POST, CREATE_NEW_POST} from "../actions"

export const postReducer = ((posts=[], action)=>{
    const {type, payload} = action;
    switch (type){
        case GET_ALL_POST:
            return payload;
        case CREATE_NEW_POST:
            return [...posts, payload];
        default:
            return posts;
    }
})