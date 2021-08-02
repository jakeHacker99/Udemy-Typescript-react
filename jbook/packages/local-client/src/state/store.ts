import { persistMiddlware } from './../middlewares/persist-middlware';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";




export const store = createStore(reducers, {}, applyMiddleware(thunk, persistMiddlware))
