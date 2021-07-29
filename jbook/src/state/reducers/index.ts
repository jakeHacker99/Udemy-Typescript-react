import { combineReducers } from "redux";
import bundlesReducer from "./bundlesReducers";
import cellsReducer from "./cellsReducers";

const reducers = combineReducers({
    cells: cellsReducer,
    bundles: bundlesReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>;




