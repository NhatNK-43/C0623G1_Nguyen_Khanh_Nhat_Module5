import thunk from "redux-thunk";
import {rootReducer} from "./reducers/rootReducer";
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./middlewares/postSagaMiddleware";

//REDUX-THUNK
const initStore  = {};
const thunkMiddleware = [thunk]
const store = createStore(rootReducer, initStore, applyMiddleware(...thunkMiddleware))


//REDUX_SAGA
// const initStore  = {};
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
// sagaMiddleware.run(rootSaga)
export default store;