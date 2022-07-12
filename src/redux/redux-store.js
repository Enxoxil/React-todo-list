import {compose, applyMiddleware, legacy_createStore as createStore} from "redux";
import {reducer} from "./todos-reducer";
import thunkMiddleware from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;
