import * as postCallAPIService from "../../services/post_call_api_service"
import {CREATE_NEW_POST, GET_ALL_POST} from "../actions";

export const getAllPostApiThunk = () => async (dispatch) => {
    const data = await postCallAPIService.getAll();

    dispatch({
        type: GET_ALL_POST,
        payload: data
    })
}

export const createPostApi = (post) => async (dispatch)=>{
    const status = await postCallAPIService.create(post);
    dispatch({
        type: CREATE_NEW_POST,
        payload: post
    })
    return status;
}