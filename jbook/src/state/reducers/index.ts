import { combineReducers } from "redux";
import cellReducer from "./cellsReducers";

const reducers = combineReducers({
    cells: cellReducer
})

export default reducers




