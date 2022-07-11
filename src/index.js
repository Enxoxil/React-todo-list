import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App/App.jsx";
import {reducer} from "./redux/redux";
import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import thunkMiddleware from "redux-thunk";

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
window.__store__ = store;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
