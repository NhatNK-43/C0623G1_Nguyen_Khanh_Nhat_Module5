import axios from "axios";
import * as postCallAPIService from "../../services/post_call_api_service"
import {GET_ALL_POST} from "../actions";
import {takeLatest,put} from "redux-saga/effects"
function* getAllPostApiSaga(){
    try{
        const data = yield postCallAPIService.getAll();
        yield put({
            type: GET_ALL_POST,
            payload: data
        })
    } catch (e) {
        console.log("Error");
    }
}

export default function* rootSaga(){
    yield takeLatest(GET_ALL_POST,getAllPostApiSaga)
}